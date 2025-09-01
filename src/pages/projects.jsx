import React, { useState } from "react";
import "./projects.css";
import white from '../assets/symbols/plains.svg';
import black from '../assets/symbols/swamp.svg';
import red from '../assets/symbols/mountain.svg';
import blue from '../assets/symbols/island.svg';
import green from '../assets/symbols/forest.svg';
import death from '../assets/symbols/death.svg';

function Projects() {
  return (
    <div className="section">
      <div className="cubewrap">
        <div className="cube">
          <div className="face front">
            <img src={white} alt="White Mana" />
          </div>
          <div className="face back">
            <img src={blue} alt="Blue Mana" />
          </div>
          <div className="face right">
            <img src={black} alt="Black Mana" />
          </div>
          <div className="face left">
            <img src={red} alt="Red Mana" />
          </div>
          <div className="face top">
            <img src={green} alt="Green Mana" />
          </div>
          <div className="face bottom">
            <img src={death} alt="Death Mana" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
