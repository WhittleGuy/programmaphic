import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavLinks">
          <NavLink className="NavLink" to="./PageOne">
            ONE
          </NavLink>
          <NavLink className="NavLink" to="./PageTwo">
            TWO
          </NavLink>
          <NavLink className="NavLink" to="./PageThree">
            THREE
          </NavLink>
          <NavLink className="NavLink" to="./PageFour">
            FOUR
          </NavLink>
        </div>
      </div>
    );
  }
}
