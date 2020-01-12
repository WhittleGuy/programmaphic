import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="./home" />
    </Route>
    <Route exact path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQ} />
    <Route path="/contact" component={Contact} />
    <Route path="/*" component={Home} />
  </Switch>
);

export default Main;
