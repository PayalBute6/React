import React, { Component } from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Die extends Component {
  render() {
    const { face, rolling, theme } = this.props;
    return (
      <div className={`Die-wrapper ${rolling ? 'Die-shaking' : ''}`}>
        <FontAwesomeIcon 
          icon={['fas', `fa-dice-${face}`]} 
          className={`Die die-theme-${theme}`} 
        />
        <div className="Die-shadow" />
      </div>
    );
  }
}

export default Die;
