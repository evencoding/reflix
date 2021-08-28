import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);
