import React from "react";
import "./App.css";
import Agenda from "./pages/Agenda";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div className="App">
    <header className="App-header">NDC Sydney Agenda</header>
    <Router>
      <Agenda />
    </Router>
  </div>
);

export default App;
