import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import PersonalData from "./pages/PersonalDetails";
import UserProfession from "./pages/UserProfession";
import Login from "./pages/Main";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={PersonalData} />
        <Route path="/register/2" exact component={UserProfession} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
