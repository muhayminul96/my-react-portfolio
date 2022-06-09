import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import boy from "../../img/muhayminul.png";



const Intro = () => {
    
  return (
    <div>
      <div className="Intro" id="Intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hello! I Am</span>
            <span>Syed Muhayminul Islam</span>
            <span>
              Frontend Developer with React JS and also Problem solver with
              python
            </span>
          </div>
          <button className="button i-button">Resume</button>
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="i-right">
          <img src={boy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
