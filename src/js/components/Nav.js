import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavLinks">
          <NavLink className="NavLink" to="./moire">
            MOIRE
          </NavLink>
          <NavLink className="NavLink" to="./sines">
            SINES
          </NavLink>
          <NavLink className="NavLink" to="./circles">
            CIRCLES
          </NavLink>
          <NavLink className="NavLink" to="./lines">
            LINES
          </NavLink>
          <NavLink className="NavLink" to="./flow">
            FLOW
          </NavLink>
        </div>
      </div>
    );
  }
}
