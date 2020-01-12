import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Professional from "./pages/Professional";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="./home" />
    </Route>
    <Route exact path="/home" component={Home} />
    <Route path="/professional" component={Professional} />
    <Route path="/faq" component={FAQ} />
    <Route path="/contact" component={Contact} />
    <Route path="/*" component={Home} />
  </Switch>
);

export default Main;
