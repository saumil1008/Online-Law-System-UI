import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginAdmin from "./component/container/LoginAdmin";
import home from "./component/container/home";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/login" component={LoginAdmin} />
    </Switch>
  );
};
