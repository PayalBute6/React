import React from 'react';

const Coin = ({ info, isFlipping }) => {
  return (
    <div className="Coin-container">
      <img
        className={`Coin-img ${isFlipping ? 'flipping' : ''}`}
        src={info.imgSrc}
        alt={info.side}
      />
    </div>
  );
};

export default Coin;
