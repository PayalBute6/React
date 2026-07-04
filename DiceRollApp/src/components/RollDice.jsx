import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';
import { playDiceRollSound } from '../utils/audio';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = {
      // Configuration state
      diceCount: 2,
      theme: 'purple',
      gameMode: 'free', // 'free' | 'chase' | 'duel'

      // Active Dice Values
      diceValues: ['one', 'one'],
      rolling: false,

      // Live Stats
      totalRolls: 0,
      highScore: 0,
      runningSum: 0,
      rollHistory: [], // Array of { id, rolls: [], sum }

      // Game Mode variables
      chaseAttempts: 0,
      chaseWon: false,
      duelTurn: 'player', // 'player' | 'ai'
      duelPlayerScore: 0,
      duelAiScore: 0,
      duelRound: 1,
      duelWinnerMessage: ''
    };

    this.roll = this.roll.bind(this);
    this.resetStats = this.resetStats.bind(this);
    this.handleDiceCountChange = this.handleDiceCountChange.bind(this);
    this.handleGameModeChange = this.handleGameModeChange.bind(this);
  }

  // Convert die string face back to number representation
  faceToNumber(face) {
    const mapping = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };
    return mapping[face] || 0;
  }

  // Reset Game & Stats
  resetStats() {
    this.setState({
      totalRolls: 0,
      highScore: 0,
      runningSum: 0,
      rollHistory: [],
      chaseAttempts: 0,
      chaseWon: false,
      duelPlayerScore: 0,
      duelAiScore: 0,
      duelRound: 1,
      duelWinnerMessage: ''
    });
  }

  handleDiceCountChange(e) {
    const count = parseInt(e.target.value, 10);
    this.setState({
      diceCount: count,
      diceValues: Array(count).fill('one'),
      chaseWon: false,
      chaseAttempts: 0
    });
  }

  handleGameModeChange(e) {
    const mode = e.target.value;
    this.setState({
      gameMode: mode,
      chaseAttempts: 0,
      chaseWon: false,
      duelPlayerScore: 0,
      duelAiScore: 0,
      duelRound: 1,
      duelWinnerMessage: '',
      duelTurn: 'player'
    });
  }

  // Roll Handler
  roll() {
    const { sides } = this.props;
    const { diceCount, gameMode, chaseAttempts, duelTurn, duelRound } = this.state;

    // Trigger synthetic audio clatter
    playDiceRollSound();

    this.setState({ rolling: true });

    setTimeout(() => {
      // Pick random new values for dice
      const newDiceValues = Array.from({ length: diceCount }, () => 
        sides[Math.floor(Math.random() * sides.length)]
      );

      const rollSum = newDiceValues.reduce((acc, face) => acc + this.faceToNumber(face), 0);

      this.setState(prevState => {
        // Base additions
        const newTotalRolls = prevState.totalRolls + 1;
        const newHighScore = Math.max(prevState.highScore, rollSum);
        const newRunningSum = prevState.runningSum + rollSum;
        
        // Push recent rolls list
        const updatedHistory = [
          { id: Date.now(), rolls: newDiceValues.map(v => this.faceToNumber(v)), sum: rollSum },
          ...prevState.rollHistory
        ].slice(0, 5); // Keep last 5 entries

        // Game mode conditional logic
        let modeUpdates = {};

        if (gameMode === 'chase') {
          const allMatching = newDiceValues.every(val => val === newDiceValues[0]);
          modeUpdates = {
            chaseAttempts: prevState.chaseAttempts + 1,
            chaseWon: allMatching
          };
        } else if (gameMode === 'duel') {
          if (duelTurn === 'player') {
            modeUpdates = {
              duelPlayerScore: prevState.duelPlayerScore + rollSum,
              duelTurn: 'ai'
            };
            // Trigger AI auto roll shortly after
            setTimeout(() => this.roll(), 1200);
          } else {
            // AI Turn roll
            const nextRound = duelRound + 1;
            let winnerMessage = '';
            
            if (nextRound > 3) {
              const finalPlayer = prevState.duelPlayerScore;
              const finalAi = prevState.duelAiScore + rollSum;
              if (finalPlayer > finalAi) {
                winnerMessage = `🏆 You Won the Duel! (${finalPlayer} vs ${finalAi})`;
              } else if (finalAi > finalPlayer) {
                winnerMessage = `🤖 AI Won the Duel! (${finalAi} vs ${finalPlayer})`;
              } else {
                winnerMessage = `🤝 It's a Tie Game! (${finalPlayer} vs ${finalAi})`;
              }
            }

            modeUpdates = {
              duelAiScore: prevState.duelAiScore + rollSum,
              duelTurn: 'player',
              duelRound: nextRound,
              duelWinnerMessage: winnerMessage
            };
          }
        }

        return {
          diceValues: newDiceValues,
          rolling: false,
          totalRolls: newTotalRolls,
          highScore: newHighScore,
          runningSum: newRunningSum,
          rollHistory: updatedHistory,
          ...modeUpdates
        };
      });

    }, 1000);
  }

  render() {
    const { 
      diceCount, theme, gameMode, diceValues, rolling, 
      totalRolls, highScore, runningSum, rollHistory,
      chaseAttempts, chaseWon, duelTurn, duelPlayerScore, 
      duelAiScore, duelRound, duelWinnerMessage 
    } = this.state;

    const avgScore = totalRolls > 0 ? (runningSum / totalRolls).toFixed(1) : '0';

    return (
      <div className="RollDice">
        
        {/* Play Area Container */}
        <div className="PlayArea-panel">
          <h1 className="Dashboard-title">Dice Roll Dashboard</h1>
          <p className="Dashboard-subtitle">A high-fidelity rolling interface with multiple game variations.</p>

          {/* Controls Bar */}
          <div className="Controls-container">
            
            <div className="Control-group">
              <label>Dice Count</label>
              <select 
                className="Control-select" 
                value={diceCount} 
                onChange={this.handleDiceCountChange}
                disabled={rolling || gameMode === 'duel'}
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Die' : 'Dice'}</option>
                ))}
              </select>
            </div>

            <div className="Control-group">
              <label>Game Mode</label>
              <select 
                className="Control-select" 
                value={gameMode} 
                onChange={this.handleGameModeChange}
                disabled={rolling}
              >
                <option value="free">Free Play</option>
                <option value="chase">Double Chase</option>
                <option value="duel">Dice Duel (VS AI)</option>
              </select>
            </div>

            <div className="Control-group">
              <label>Dice Theme</label>
              <div className="Theme-picker">
                {['purple', 'red', 'green', 'blue', 'yellow'].map(color => (
                  <button 
                    key={color}
                    type="button"
                    className={`Theme-btn Theme-btn-${color} ${theme === color ? 'active' : ''}`}
                    onClick={() => this.setState({ theme: color })}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Dice Board Container */}
          <div className="RollDice-container">
            {diceValues.map((face, index) => (
              <Die key={index} face={face} rolling={rolling} theme={theme} />
            ))}
          </div>

          {/* Action Trigger Button */}
          {gameMode === 'duel' && duelWinnerMessage ? (
            <button className="RollDice-btn" onClick={this.resetStats}>
              Restart Duel
            </button>
          ) : (
            <button 
              className="RollDice-btn"
              disabled={rolling || (gameMode === 'chase' && chaseWon) || (gameMode === 'duel' && duelTurn === 'ai')}
              onClick={this.roll}
            >
              {rolling 
                ? 'Rolling...' 
                : gameMode === 'duel' 
                  ? `Roll for ${duelTurn === 'player' ? 'You' : 'AI'}`
                  : 'Roll Dice!'}
            </button>
          )}

          {/* Game Mode Status Banners */}
          {gameMode === 'chase' && (
            <div className="Game-status-banner">
              {chaseWon 
                ? `🎉 Match hit! Completed in ${chaseAttempts} attempts.` 
                : `Chase mode active. Attempts: ${chaseAttempts}`}
            </div>
          )}

          {gameMode === 'duel' && (
            <div className="Game-status-banner">
              {duelWinnerMessage 
                ? duelWinnerMessage 
                : `Round ${Math.min(duelRound, 3)}/3 - Score: You ${duelPlayerScore} | AI ${duelAiScore} (${duelTurn === 'player' ? 'Your turn' : 'AI Rolling...'})`}
            </div>
          )}

        </div>

        {/* Sidebar Statistics & Logs Panel */}
        <div className="Sidebar-panel">
          
          <div className="Sidebar-card">
            <h3>Analytics Board</h3>
            <div className="Stats-grid">
              <div className="Stat-box">
                <span className="Stat-label">Rolls</span>
                <span className="Stat-value">{totalRolls}</span>
              </div>
              <div className="Stat-box">
                <span className="Stat-label">High Score</span>
                <span className="Stat-value">{highScore}</span>
              </div>
              <div className="Stat-box">
                <span className="Stat-label">Avg Roll</span>
                <span className="Stat-value">{avgScore}</span>
              </div>
              <div className="Stat-box">
                <span className="Stat-label">Sum Total</span>
                <span className="Stat-value">{runningSum}</span>
              </div>
            </div>
            <button 
              style={{
                width: '100%', marginTop: '15px', padding: '8px', 
                background: 'rgba(255,255,255,0.05)', color: '#fff', 
                border: '1px solid var(--panel-border)', borderRadius: '8px',
                cursor: 'pointer', fontFamily: 'var(--font-main)', fontWeight: '600'
              }} 
              onClick={this.resetStats}
            >
              Reset Statistics
            </button>
          </div>

          <div className="Sidebar-card">
            <h3>Roll History Log</h3>
            {rollHistory.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>No rolls logged yet.</p>
            ) : (
              <ul className="History-list">
                {rollHistory.map(item => (
                  <li key={item.id} className="History-item">
                    <div className="History-rolls">
                      {item.rolls.map((val, idx) => (
                        <span key={idx}>[{val}]</span>
                      ))}
                    </div>
                    <div className="History-sum">Sum: {item.sum}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>

      </div>
    );
  }
}

export default RollDice;
