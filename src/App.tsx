import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/postmessage">Postmessage</Route>
        <Route path="/">Hey</Route>
      </Switch>
    </Router>
  );
}

export default App;
