import React, { Component } from "react";
import spirograph from "../sketches/spirograph";
import P5Wrapper from "react-p5-wrapper";

export default class Spirograph extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={spirograph}></P5Wrapper>
        </div>
      </>
    );
  }
}
