import React, { useState } from 'react';
import Coin from './Coin';

const FlipCoin = () => {
  const [currFace, setCurrFace] = useState(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  // Advanced States
  const [skin, setSkin] = useState('gold');
  const [isMuted, setIsMuted] = useState(false);
  const [flipCount, setFlipCount] = useState(1);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState({ side: null, count: 0, max: 0 });

  // Web Audio API Synthesis: Play realistic coin toss hum
  const playTossSound = () => {
    if (isMuted) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(800, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.5);
      
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1000, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.5);
      
      // Amplitude modulator to simulate spinning coin "wah-wah" sound in flight
      const modulator = ctx.createOscillator();
      const modulatorGain = ctx.createGain();
      modulator.frequency.value = 16; // 16 spins per sec
      modulatorGain.gain.value = 0.35;
      
      gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.55);
      
      modulator.connect(modulatorGain);
      modulatorGain.connect(gainNode.gain);
      
      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc1.start();
      osc2.start();
      modulator.start();
      
      osc1.stop(ctx.currentTime + 0.55);
      osc2.stop(ctx.currentTime + 0.55);
      modulator.stop(ctx.currentTime + 0.55);
    } catch (e) {
      console.warn("Audio Context blocked or unsupported:", e);
    }
  };

  // Web Audio API Synthesis: Play metallic coin land clink
  const playLandSound = () => {
    if (isMuted) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const playBouncingClink = (delay, freq, volume, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        
        gain.gain.setValueAtTime(volume, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
      };
      
      // Simulate coin settling on table: primary clink + rapid decay bounces
      playBouncingClink(0, 1600, 0.25, 0.08);
      playBouncingClink(0.03, 1400, 0.15, 0.06);
      playBouncingClink(0.06, 1250, 0.08, 0.04);
      playBouncingClink(0.09, 1200, 0.03, 0.03);
    } catch (e) {
      console.warn("Audio landing play error:", e);
    }
  };

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    playTossSound();

    if (flipCount === 1) {
      // Single Flip mode (standard visual flip animation)
      const randomIdx = Math.floor(Math.random() * 2);
      const side = randomIdx === 0 ? 'head' : 'tail';

      setTimeout(() => {
        setCurrFace(side);
        setTotalFlips((prev) => prev + 1);
        
        const isHeads = side === 'head';
        if (isHeads) {
          setHeads((prev) => prev + 1);
        }
        
        // Update History
        setHistory((prev) => [side, ...prev].slice(0, 10));

        // Update Streaks
        setStreak((prev) => {
          if (prev.side === side) {
            const newCount = prev.count + 1;
            return {
              side,
              count: newCount,
              max: Math.max(prev.max, newCount)
            };
          } else {
            return {
              side,
              count: 1,
              max: Math.max(prev.max, 1)
            };
          }
        });

        playLandSound();
        setIsFlipping(false);
      }, 600); // 600ms animation duration
    } else {
      // Batch Simulator mode (fast statistical calculations)
      setTimeout(() => {
        let headsAdded = 0;
        const results = [];
        for (let i = 0; i < flipCount; i++) {
          const side = Math.random() < 0.5 ? 'head' : 'tail';
          results.push(side);
          if (side === 'head') {
            headsAdded++;
          }
        }

        const finalSide = results[results.length - 1];
        setCurrFace(finalSide);
        setTotalFlips((prev) => prev + flipCount);
        setHeads((prev) => prev + headsAdded);

        // Prepend batch results to history in order of execution
        setHistory((prev) => [...results, ...prev].slice(0, 10));

        // Update streaks sequentially
        setStreak((prev) => {
          let currentSide = prev.side;
          let currentCount = prev.count;
          let currentMax = prev.max;

          results.forEach((side) => {
            if (side === currentSide) {
              currentCount++;
            } else {
              currentSide = side;
              currentCount = 1;
            }
            currentMax = Math.max(currentMax, currentCount);
          });

          return {
            side: currentSide,
            count: currentCount,
            max: currentMax
          };
        });

        playLandSound();
        setIsFlipping(false);
      }, 500); // Shorter duration to resolve large lists quickly
    }
  };

  const resetStats = () => {
    setCurrFace(null);
    setTotalFlips(0);
    setHeads(0);
    setHistory([]);
    setStreak({ side: null, count: 0, max: 0 });
  };

  const tails = totalFlips - heads;
  
  // Percentage calculation
  const headsPercentage = totalFlips > 0 ? Math.round((heads / totalFlips) * 100) : 50;
  const tailsPercentage = totalFlips > 0 ? 100 - headsPercentage : 50;

  return (
    <div className="FlipCoin-card">
      <h2 className="FlipCoin-title">Interactive Coin Flipper</h2>
      
      {/* Settings Panel */}
      <div className="settings-panel">
        <div className="setting-item">
          <span>Skin:</span>
          <select 
            className="setting-select" 
            value={skin} 
            onChange={(e) => setSkin(e.target.value)}
            disabled={isFlipping}
          >
            <option value="gold">🥇 Classic Gold</option>
            <option value="silver">🥈 Sterling Silver</option>
          </select>
        </div>
        <div className="setting-item">
          <button 
            className="btn-option" 
            onClick={() => setIsMuted(!isMuted)}
            style={{ padding: '4px 10px', fontSize: '12px' }}
          >
            {isMuted ? '🔇 Muted' : '🔊 Sound On'}
          </button>
        </div>
      </div>

      {/* Main Flip Display Area */}
      <div className="Coin-display-area">
        {currFace ? (
          <Coin side={currFace} isFlipping={isFlipping} skin={skin} />
        ) : (
          <div className="Coin-placeholder">Flip to start!</div>
        )}
      </div>

      {/* Multi-Flip Selection */}
      <div className="multi-flip-section">
        <span className="multi-flip-label">Flip quantity:</span>
        <div className="multi-flip-options">
          {[1, 5, 10, 100].map((num) => (
            <button
              key={num}
              className={`btn-option ${flipCount === num ? 'active' : ''}`}
              onClick={() => setFlipCount(num)}
              disabled={isFlipping}
            >
              {num === 1 ? 'Single' : `×${num}`}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="button-group">
        <button 
          className="btn btn-primary" 
          onClick={flipCoin} 
          disabled={isFlipping}
          style={{ flexGrow: 1 }}
        >
          {isFlipping ? 'Flipping...' : `Flip Coin ${flipCount > 1 ? `(${flipCount}x)` : ''}`}
        </button>
        
        <button 
          className="btn btn-secondary" 
          onClick={resetStats} 
          disabled={totalFlips === 0 || isFlipping}
        >
          Reset
        </button>
      </div>

      {/* Core Stats Dashboard */}
      <div className="stats-dashboard">
        <div className="stat-item">
          <span className="stat-value">{totalFlips}</span>
          <span className="stat-label">Total Flips</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{heads}</span>
          <span className="stat-label">Heads ({totalFlips > 0 ? `${headsPercentage}%` : '0%'})</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{tails}</span>
          <span className="stat-label">Tails ({totalFlips > 0 ? `${tailsPercentage}%` : '0%'})</span>
        </div>
      </div>

      {/* Advanced Statistical Gauges & Streak tracking */}
      <div className="advanced-stats">
        <div className="progress-labels">
          <span>Heads ({headsPercentage}%)</span>
          <span>Tails ({tailsPercentage}%)</span>
        </div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${headsPercentage}%` }}
          />
        </div>

        <div className="streak-badges">
          <div>
            Current Streak:{' '}
            <span className="streak-val">
              {streak.count > 0 
                ? `${streak.count} ${streak.side === 'head' ? 'Heads' : 'Tails'}`
                : 'None'}
            </span>
          </div>
          <div style={{ borderLeft: '1px dashed var(--border)', paddingLeft: '20px' }}>
            Max Streak:{' '}
            <span className="streak-val">{streak.max}</span>
          </div>
        </div>
      </div>

      {/* Flip History Log */}
      {history.length > 0 && (
        <div className="history-section">
          <span className="history-title">Recent Flips (newest first)</span>
          <div className="history-list">
            {history.map((side, idx) => (
              <span 
                key={history.length - idx} 
                className={`history-badge ${side === 'head' ? 'heads' : 'tails'}`}
                title={side === 'head' ? 'Heads' : 'Tails'}
              >
                {side === 'head' ? 'H' : 'T'}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipCoin;
