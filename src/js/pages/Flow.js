import React, { Component } from "react";
import flow from "../sketches/flow";
import P5Wrapper from "react-p5-wrapper";

export default class Flow extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={flow}></P5Wrapper>
        </div>
      </>
    );
  }
}
