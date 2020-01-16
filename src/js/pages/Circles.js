import React, { Component } from "react";
import circles from "../sketches/circles";
import P5Wrapper from "react-p5-wrapper";

export default class Cirgle extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={circles}></P5Wrapper>
        </div>
      </>
    );
  }
}
