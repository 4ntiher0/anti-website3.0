import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="headertxt">
        {/* Use public folder directly, no import */}
        <img src="/logo.png" alt="ANTIs ARENA Logo" className="header-logo" />
      </div>
      <div className="headerlogo">

      </div>
    </header>
  );
};

export default Header;
