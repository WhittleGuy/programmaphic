import React, { Component } from "react";
import lines from "../sketches/lines";
import P5Wrapper from "react-p5-wrapper";

export default class Lines extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={lines}></P5Wrapper>
        </div>
      </>
    );
  }
}
