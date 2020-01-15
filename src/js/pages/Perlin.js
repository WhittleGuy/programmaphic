import React, { Component } from "react";
import perlin from "../sketches/perlin";
import P5Wrapper from "react-p5-wrapper";

export default class Perlin extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={perlin}></P5Wrapper>
        </div>
      </>
    );
  }
}
