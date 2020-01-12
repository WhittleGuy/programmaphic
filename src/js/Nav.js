import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavLinks">
          <NavLink className="NavLink" to="./home">
            Home
          </NavLink>
          <NavLink className="NavLink" to="./about">
            About
          </NavLink>
          <NavLink className="NavLink" to="./home">
            Contact
          </NavLink>
          <NavLink className="NavLink" to="./home">
            FAQ
          </NavLink>
        </div>
      </div>
    );
  }
}
