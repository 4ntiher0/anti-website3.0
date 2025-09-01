import React from 'react';
import './header.css';

const Header = () => {

    return (
        <div className="header">
            <div className="headertxt"><h1>ANTIs AREA</h1></div>    
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
        </div>
    )
};

export default Header;
