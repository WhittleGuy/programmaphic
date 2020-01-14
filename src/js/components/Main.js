import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Moire from "../pages/Moire";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="./Moire" />
    </Route>
    <Route exact path="/Moire" component={Moire} />
    <Route path="/PageTwo" component={PageTwo} />
    <Route path="/PageThree" component={PageThree} />
    <Route path="/PageFour" component={PageFour} />
    <Route path="/*" component={Moire} />
  </Switch>
);

export default Main;
