import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Create from "./screens/Create";
import Edit from "./screens/Edit";
import Extrato from "./screens/Extrato";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Menu from "./screens/Menu";
import Transferencia from "./screens/Transferencia";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Create/" exact component={Create} />
      <Route path="/Edit/" exact component={Edit} />
      <Route path="/Extrato/" exact component={Extrato} />
      <Route path="/Home/" exact component={Home} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/Menu/" exact component={Menu} />
      <Route path="/Transferencia/" exact component={Transferencia} />
    </Router>
  );
}

export default App;
