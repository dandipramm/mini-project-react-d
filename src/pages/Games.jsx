import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListGames from "../components/ListGames";
import MainImage from "../components/MainImage";

const Games = () => {
  return (
    <div>
      <Navbar />
      <MainImage heading="LIST GAMES SHOOTER." />
      <ListGames />
      <Footer />
    </div>
  );
};

export default Games;
