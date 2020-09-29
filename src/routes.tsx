import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Index from "./pages/Index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
