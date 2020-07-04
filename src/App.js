import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./ui/Navbar";
import Home from "./ui/Home";
import About from "./ui/About";
import CharacterListAll from "./component/CharacterListAll";

import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/all_characters" component={CharacterListAll} />
      </Switch>
    </Router>
  );
};

export default App;
