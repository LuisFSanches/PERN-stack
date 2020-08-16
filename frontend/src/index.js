import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Register from "./pages/register";
import Login from "./pages/Main";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
