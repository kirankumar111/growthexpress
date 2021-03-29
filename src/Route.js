import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./sections/Login";
import Index from "./sections/Index";
import NotFound from "./sections/NotFound";
import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Index} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
