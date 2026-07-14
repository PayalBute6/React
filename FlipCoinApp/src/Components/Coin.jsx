import React from 'react';
import './Coin.css';

const Coin = ({ side, isFlipping, skin = 'gold' }) => {
  // Determine correct CSS class for 3D state
  let flipClass = 'show-heads';
  if (isFlipping) {
    flipClass = side === 'head' ? 'flipping-to-heads' : 'flipping-to-tails';
  } else {
    flipClass = side === 'head' ? 'show-heads' : 'show-tails';
  }

  // Common inner design for Heads
  const renderHeadsDesign = () => (
    <svg className="coin-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer dotted ring */}
      <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Crown emblem */}
      <path 
        d="M25 65 L30 40 L42 52 L50 32 L58 52 L70 40 L75 65 Z" 
        fill="currentColor" 
        stroke="rgba(0,0,0,0.15)" 
        strokeWidth="1.5" 
      />
      <circle cx="50" cy="30" r="2.5" fill="currentColor" />
      <circle cx="30" cy="38" r="2" fill="currentColor" />
      <circle cx="70" cy="38" r="2" fill="currentColor" />
      {/* Crown base */}
      <rect x="28" y="65" width="44" height="4" rx="2" fill="currentColor" opacity="0.9" />
      {/* Label Text */}
      <path id="heads-text-path" d="M 18,50 A 32,32 0 0,1 82,50" fill="none" />
      <text fill="currentColor" fontSize="8" fontWeight="700" letterSpacing="2.5">
        <textPath href="#heads-text-path" startOffset="50%" textAnchor="middle">
          HEADS
        </textPath>
      </text>
    </svg>
  );

  // Common inner design for Tails
  const renderTailsDesign = () => (
    <svg className="coin-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer dotted ring */}
      <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Numeric 1 emblem */}
      <text 
        x="50" 
        y="58" 
        fill="currentColor" 
        fontSize="32" 
        fontWeight="800" 
        textAnchor="middle" 
        filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.15))"
      >
        1
      </text>
      {/* Laurel wreath branches */}
      <path 
        d="M28 55 C26 40 38 32 38 32 C38 32 32 42 32 55 C32 68 45 72 45 72 C45 72 30 70 28 55 Z" 
        fill="currentColor" 
        opacity="0.5" 
      />
      <path 
        d="M72 55 C74 40 62 32 62 32 C62 32 68 42 68 55 C68 68 55 72 55 72 C55 72 70 70 72 55 Z" 
        fill="currentColor" 
        opacity="0.5" 
      />
      {/* Label Text */}
      <path id="tails-text-path" d="M 82,50 A 32,32 0 0,1 18,50" fill="none" />
      <text fill="currentColor" fontSize="8" fontWeight="700" letterSpacing="2.5">
        <textPath href="#tails-text-path" startOffset="50%" textAnchor="middle">
          TAILS
        </textPath>
      </text>
    </svg>
  );

  // Dynamic Skin Styling (Gold vs Silver)
  const isGold = skin === 'gold';
  const headsColor = isGold ? '#fffbeb' : '#f8fafc';
  const tailsColor = isGold ? '#fffbeb' : '#f8fafc';

  return (
    <div className="Coin-container">
      <div className={`Coin-wrapper ${flipClass}`}>
        {/* HEADS FACE */}
        <div 
          className="Coin-face Coin-face-heads" 
          style={{ 
            color: headsColor,
            background: isGold 
              ? 'radial-gradient(circle at 30% 30%, #ffd700, #d4af37, #aa7c11)'
              : 'radial-gradient(circle at 30% 30%, #f1f5f9, #cbd5e1, #64748b)',
            borderColor: isGold ? '#f59e0b' : '#94a3b8'
          }}
        >
          {renderHeadsDesign()}
        </div>

        {/* TAILS FACE */}
        <div 
          className="Coin-face Coin-face-tails"
          style={{ 
            color: tailsColor,
            background: isGold 
              ? 'radial-gradient(circle at 30% 30%, #ffd700, #d4af37, #aa7c11)'
              : 'radial-gradient(circle at 30% 30%, #f1f5f9, #cbd5e1, #64748b)',
            borderColor: isGold ? '#f59e0b' : '#94a3b8'
          }}
        >
          {renderTailsDesign()}
        </div>
      </div>
    </div>
  );
};

export default Coin;
