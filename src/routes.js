import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginAdmin from "./component/container/LoginAdmin";
import home from "./component/container/home";
import LawyerSearch from "./component/container/LawyerSearch";
import CourtSearch from "./component/container/CourtSearch";
import Criminal from "./component/container/CriminalSearch";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/login" component={LoginAdmin} />
      <Route path="/lawyerSearch" component={LawyerSearch} />
      <Route path="/courtSearch" component={CourtSearch} />
      <Route path="/criminalSearch" component={Criminal} />
    </Switch>
  );
};
