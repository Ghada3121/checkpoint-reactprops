import React from "react";
import Player from "./Player";
import Players from "./Players";

const PlayerList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "100px" }}>
      {Players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;
