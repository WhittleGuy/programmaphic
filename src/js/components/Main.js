import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Moire from "../pages/Moire";
import Sines from "../pages/Sines";
import Perlin from "../pages/Perlin";
import PageFour from "../pages/PageFour";

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="./Moire" />
    </Route>
    <Route exact path="/moire" component={Moire} />
    <Route path="/sines" component={Sines} />
    <Route path="/perlin" component={Perlin} />
    <Route path="/PageFour" component={PageFour} />
    <Route path="/*" component={Moire} />
  </Switch>
);

export default Main;
