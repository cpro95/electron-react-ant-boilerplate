// Libs
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
// Screens
import Home from "@/screens/Home/Home";
import Latest from '@/screens/Latest/Latest'
import Ratings from '@/screens/Ratings/Ratings';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/latest" component={Latest} />
      <Route exact path="/ratings" component={Ratings} />
    </Switch>
  </HashRouter>
);

export default Routes;
