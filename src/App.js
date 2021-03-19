import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//component imports
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import MarketingPage from "./marketing/MarketingPage";
import AppMain from "./components/AppMain";

//styles import
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Switch>
        {/*   <Route exact path="/" component={MarketingPage} />*/}
          <Route path="/" component={AppMain} />
        </Switch>
      </Router>

      {/* <div className="App">
        <Header />
        <h1>NBA BALLAZ!!!</h1>
        <PlayerInfo />
      </div> */}
    </>
  );
}

export default App;
