import React from "react";
import BodyAbout from "../components/BodyAbout";
import Footer from "../components/Footer";
import MainImage from "../components/MainImage";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <MainImage heading="DESCRIPTION." text="FPS GAMES." />
      <BodyAbout />
      <Footer />
    </div>
  );
};

export default About;
