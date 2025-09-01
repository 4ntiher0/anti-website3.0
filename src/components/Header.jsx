import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="headertxt">
        <img src="/public/logo.png" alt="ANTIs ARENA Logo" className="header-logo" />
      </div>
      <div className="headerlogo">
        <div className="cube">
          <div className="face front">Front</div>
          <div className="face back">Back</div>
          <div className="face right">Right</div>
          <div className="face left">Left</div>
          <div className="face top">Top</div>
          <div className="face bottom">Bottom</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
