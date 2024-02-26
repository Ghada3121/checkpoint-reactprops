//import logo from './logo.svg';
import "./App.css";
import React from "react";
import PlayerList from "./Components/PlayerList.js";
//import Players from "./Components/Players.js";

function App() {
  return (
    <React.Fragment>
      <div className="card">
        <h1>Football Players:</h1>
        <PlayerList />
      </div>
    </React.Fragment>
  );
}

export default App;
