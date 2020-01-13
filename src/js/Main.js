import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="./home" />
    </Route>
    <Route exact path="/PageOne" component={PageOne} />
    <Route path="/PageTwo" component={PageTwo} />
    <Route path="/PageThree" component={PageThree} />
    <Route path="/PageFour" component={PageFour} />
    <Route path="/*" component={PageOne} />
  </Switch>
);

export default Main;
