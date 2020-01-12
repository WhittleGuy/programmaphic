import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>
          Created by{" "}
          <a href="https://www.brandonwhittle.com" rel="noopener norefferer">
            Whittle Design <i className="fas fa-external-link-alt"></i>
          </a>
        </p>
        <p>
          Copyright <i className="far fa-copyright"></i> 2020 Honey Creek
          Veterinary Hospital. All rights reserved.
        </p>
      </div>
    );
  }
}
