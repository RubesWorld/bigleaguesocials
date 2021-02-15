import React from "react";

//component import
import Header from "./Header";
import PlayerInfo from "./PlayerInfo";

function AppMain() {
  return (
    <div>
      <div className="App">
        <Header />
        <h1>NBA BALLAZ!!!</h1>
        <PlayerInfo />
      </div>
    </div>
  );
}

export default AppMain;
