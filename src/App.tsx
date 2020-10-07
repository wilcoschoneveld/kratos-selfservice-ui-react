import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { Callback } from "./Callback";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/callback"><Callback /></Route>
        <Route path="/auth/login"><Login /></Route>
      </Switch>
    </Router>
  );
}

export default App;
