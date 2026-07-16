import { useState, useEffect, useRef } from 'react';
import './App.css';

type TimerMode = 'work' | 'break';

function App() {
  // State for Timer Configurations (in minutes)
  const [workDuration, setWorkDuration] = useState<number>(25);
  const [breakDuration, setBreakDuration] = useState<number>(5);

  // Core Timer State
  const [mode, setMode] = useState<TimerMode>('work');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);

  // Track total time for progress circle calculations
  const totalSeconds = mode === 'work' ? workDuration * 60 : breakDuration * 60;
  
  // Track interval using a ref
  const timerRef = useRef<number | null>(null);

  // 1. Dynamic background sync with body class
  useEffect(() => {
    if (mode === 'break') {
      document.body.classList.add('break-mode');
    } else {
      document.body.classList.remove('break-mode');
    }
  }, [mode]);

  // 2. Audio Chime (Web Audio API)
  const playChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Play a bell-like clean sound (D5 to A5 sweep with volume decay)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {
      console.warn("Web Audio chime failed to play: ", e);
    }
  };

  // 3. Timer Countdown Logic
  useEffect(() => {
    if (isActive) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Timer expired! Switch mode, play chime, reset active state
            playChime();
            const nextMode = mode === 'work' ? 'break' : 'work';
            setMode(nextMode);
            setIsActive(false); // Pause on switch to let user prepare
            return (nextMode === 'work' ? workDuration : breakDuration) * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, mode, workDuration, breakDuration]);

  // Sync timeLeft when custom durations are changed (when timer is paused)
  useEffect(() => {
    if (!isActive) {
      setTimeLeft(mode === 'work' ? workDuration * 60 : breakDuration * 60);
    }
  }, [workDuration, breakDuration, mode, isActive]);

  // 4. Timer Controls
  const togglePlay = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft((mode === 'work' ? workDuration : breakDuration) * 60);
  };

  const skipSession = () => {
    setIsActive(false);
    const nextMode = mode === 'work' ? 'break' : 'work';
    setMode(nextMode);
    setTimeLeft((nextMode === 'work' ? workDuration : breakDuration) * 60);
  };

  // Formatting utility (e.g. 1500 sec -> "25:00")
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // SVG circular properties
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / totalSeconds) * circumference;

  return (
    <div className="pomodoro-container">
      {/* Title Header */}
      <h1 className="app-title">
        {mode === 'work' ? '🍅 Focus Session' : '🌿 Break Time'}
      </h1>

      {/* Circular Progress + Time Display */}
      <div className={`timer-ring-container ${isActive ? 'ticking' : ''}`}>
        <svg className="timer-svg" width="280" height="280">
          <circle
            className="timer-ring-bg"
            cx="140"
            cy="140"
            r={radius}
          />
          <circle
            className="timer-ring-progress"
            cx="140"
            cy="140"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="time-display">{formatTime(timeLeft)}</div>
      </div>

      {/* Control Actions */}
      <div className="control-deck">
        <button className="btn btn-primary" onClick={togglePlay}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-secondary" onClick={resetTimer}>
          Reset
        </button>
        <button className="btn btn-secondary" onClick={skipSession}>
          Skip
        </button>
      </div>

      {/* Adjust Duration Panels */}
      <div className="duration-settings">
        <div className="setting-card">
          <span className="setting-label">Focus Time</span>
          <div className="setting-controls">
            <button 
              disabled={isActive} 
              onClick={() => setWorkDuration(Math.max(1, workDuration - 1))}
            >
              -
            </button>
            <span className="duration-val">{workDuration}m</span>
            <button 
              disabled={isActive} 
              onClick={() => setWorkDuration(Math.min(60, workDuration + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="setting-card">
          <span className="setting-label">Break Time</span>
          <div className="setting-controls">
            <button 
              disabled={isActive} 
              onClick={() => setBreakDuration(Math.max(1, breakDuration - 1))}
            >
              -
            </button>
            <span className="duration-val">{breakDuration}m</span>
            <button 
              disabled={isActive} 
              onClick={() => setBreakDuration(Math.min(60, breakDuration + 1))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
