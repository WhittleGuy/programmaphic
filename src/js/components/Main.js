import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Moire from "../pages/Moire";
import Sines from "../pages/Sines";
import Flow from "../pages/Flow";
import Lines from "../pages/Lines";
import Circles from "../pages/Circles";

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="./Moire" />
    </Route>
    <Route exact path="/moire" component={Moire} />
    <Route path="/sines" component={Sines} />
    <Route path="/circles" component={Circles} />
    <Route path="/flow" component={Flow} />
    <Route path="/lines" component={Lines} />
    <Route path="/*" component={Moire} />
  </Switch>
);

export default Main;
