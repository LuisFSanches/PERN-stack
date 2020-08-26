import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import isAuthenticated from "./auth";

import PersonalData from "./pages/PersonalDetails";
import UserProfession from "./pages/UserProfession";
import Login from "./pages/Main";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  //const auth = false;
  //const [isAuthenticated, setIsAuthenticated] = useState(auth ? true : false);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={PersonalData} />
        <Route path="/register/2" exact component={UserProfession} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
