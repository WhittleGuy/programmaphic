import React, { Component } from "react";
import sines from "../sketches/sines";
import P5Wrapper from "react-p5-wrapper";

export default class Sines extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={sines}></P5Wrapper>
        </div>
      </>
    );
  }
}
