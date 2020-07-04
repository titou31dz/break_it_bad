import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./ui/Home";
import About from "./ui/About";

import "./App.css";
import NavBar from "./ui/Navbar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
