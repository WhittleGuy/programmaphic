import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a href="https://www.brandonwhittle.com" rel="noopener norefferer">
          <i className="fas fa-dumpster-fire"></i>
        </a>

        <a href="https://www.twitter.com/whittleguyyy">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="https://www.github.com/whittleguy">
          <i className="fab fa-github"></i>
        </a>
      </div>
    );
  }
}
