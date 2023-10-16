import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/home";
import "./styles/style.css";
import TopPicks from "./pages/top-picks";

class App extends React.Component {
  componentDidMount() {
    if (window.safari) {
      history.pushState(null, null, location.href);
      window.onpopstate = function (event) {
        history.go(1);
      };
    }
  }

  render() {
    return (
      <Router>
        <Home path="/" />
        <TopPicks path="top-picks" />
      </Router>
    );
  }
}

export default App;
