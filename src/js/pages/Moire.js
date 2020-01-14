import React, { Component } from "react";
import moire from "../library/moire";
import P5Wrapper from "react-p5-wrapper";

export default class Moire extends Component {
  render() {
    return (
      <>
        <div className="main-window" id="App">
          <P5Wrapper sketch={moire}></P5Wrapper>
        </div>
      </>
    );
  }
}
