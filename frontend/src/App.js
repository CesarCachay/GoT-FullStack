import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <Navbar title="Fullstack Got Challenge" />
      <div className="container">
        <Router>
          <Home path="/" />
          <NotFound default />
        </Router>
      </div>
    </div>
  );
}

export default App;
