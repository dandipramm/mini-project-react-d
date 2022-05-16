import React, { useState, useEffect } from "react";
import "./ListGamesStyles.css";

const ListGames = () => {
  const [container, setContainer] = useState([]);

  fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter", {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "d250cec0cfmsh267c9cd7fc3250fp17f11ejsn635114cad422",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setContainer(data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="body-games">
      <div className="element">
        {container.map((data) => {
          return (
            <div className="element-div">
              <img src={data.thumbnail} alt="" />
              <h3>{data.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListGames;
