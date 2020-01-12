import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavLinks">
          <NavLink className="NavLink" to="./home">
            HOME
          </NavLink>
          <NavLink className="NavLink" to="./professional">
            PROFESSIONAL
          </NavLink>
          <NavLink className="NavLink" to="./contact">
            CONTACT
          </NavLink>
          <NavLink className="NavLink" to="./faq">
            FAQ
          </NavLink>
        </div>
      </div>
    );
  }
}
