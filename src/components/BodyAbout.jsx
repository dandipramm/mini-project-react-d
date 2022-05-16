import React from "react";
import "./BodyAboutStyles.css";
import { Link } from "react-router-dom";

import Csgo from "../assets/csgo.jpg";
import Valor from "../assets/valorimg.jpg";

const BodyAbout = () => {
  return (
    <div className="body-about">
      <div className="left">
        <h1>FPS GAMES</h1>
        <p>First-person shooters may be structurally composed of levels, or use the technique of a continuous narrative in which the game never leaves the first-person perspective. First-person shooters may feature a multiplayer mode, There are many free-to-play first-person shooters on the market now.</p>
        <Link to="/games">
          <button className="btn">GO TO GAMES</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Csgo} className="img" alt="" />
          </div>
          <div className="img-stack bottom">
            <img src={Valor} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAbout;
