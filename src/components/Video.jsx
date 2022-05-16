import React from "react";
import "./VideoStyles.css";
import { Link } from "react-router-dom";

import fpsVideo from "../assets/pubgvideo.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={fpsVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>FIRST PERSON SHOOTER</h1>
        <p>genre of action video game that is played from the point of view of the protagonist.</p>
        <Link to="/about" className="btn">
          About
        </Link>
        <Link to="/question" className="btn btn-light">
          Question
        </Link>
      </div>
    </div>
  );
};

export default Video;
