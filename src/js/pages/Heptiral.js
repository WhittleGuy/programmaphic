import React, { Component } from "react";
import heptiral from "../sketches/heptiral";
import P5Wrapper from "react-p5-wrapper";

export default class Heptiral extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={heptiral}></P5Wrapper>
        </div>
      </>
    );
  }
}
