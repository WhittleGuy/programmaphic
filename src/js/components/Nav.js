import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavLinks">
          <NavLink className="NavLink" to="./Moire">
            MOIRE
          </NavLink>
        </div>
      </div>
    );
  }
}
