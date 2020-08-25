import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import PersonalData from "./pages/PersonalDetails";
import UserProfession from "./pages/UserProfession";
import Login from "./pages/Main";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  function setAuth(boolean) {
    setIsAuthenticated(boolean);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} setAuth={setAuth} />
        <Route
          path="/register"
          exact
          component={PersonalData}
          setAuth={setAuth}
        />
        <Route
          path="/register/2"
          exact
          component={UserProfession}
          setAuth={setAuth}
        />
        <PrivateRoute
          path="/dashboard"
          exact
          component={Dashboard}
          setAuth={setAuth}
        />
      </Switch>
    </BrowserRouter>
  );
}
