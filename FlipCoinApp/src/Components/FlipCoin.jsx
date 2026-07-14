import React, { useState } from 'react';
import Coin from './Coin';

const COINS = [
  {
    side: 'head',
    imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
  },
  {
    side: 'tail',
    imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
  }
];

const FlipCoin = () => {
  const [currFace, setCurrFace] = useState(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);

    const randomIdx = Math.floor(Math.random() * COINS.length);
    const newFace = COINS[randomIdx];

    // Wait for the 3D flip animation (600ms) to complete before updating stats
    setTimeout(() => {
      setCurrFace(newFace);
      setTotalFlips((prev) => prev + 1);
      if (newFace.side === 'head') {
        setHeads((prev) => prev + 1);
      }
      setIsFlipping(false);
    }, 600);
  };

  const resetStats = () => {
    setCurrFace(null);
    setTotalFlips(0);
    setHeads(0);
  };

  const tails = totalFlips - heads;

  return (
    <div className="FlipCoin-card">
      <h2 className="FlipCoin-title">Flip a Coin</h2>
      
      <div className="Coin-display-area">
        {currFace ? (
          <Coin info={currFace} isFlipping={isFlipping} />
        ) : (
          <div className="Coin-placeholder">Click flip to start!</div>
        )}
      </div>

      <div className="button-group">
        <button 
          className="btn btn-primary" 
          onClick={flipCoin} 
          disabled={isFlipping}
        >
          {isFlipping ? 'Flipping...' : 'Flip Me!'}
        </button>
        
        <button 
          className="btn btn-secondary" 
          onClick={resetStats} 
          disabled={totalFlips === 0 || isFlipping}
        >
          Reset
        </button>
      </div>

      <div className="stats-dashboard">
        <div className="stat-item">
          <span className="stat-value">{totalFlips}</span>
          <span className="stat-label">Total Flips</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{heads}</span>
          <span className="stat-label">Heads</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{tails}</span>
          <span className="stat-label">Tails</span>
        </div>
      </div>
    </div>
  );
};

export default FlipCoin;
