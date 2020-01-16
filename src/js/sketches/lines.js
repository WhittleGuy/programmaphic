//! https://www.youtube.com/watch?v=BjoM9oKOAKY

import Particle from "./particle";

export default p => {
  const INC = 0.05;
  const SCL = 20;
  const WIDTH = p.windowWidth;
  const HEIGHT = p.windowHeight * 0.95;
  let cols, rows;
  let zoff = 0;
  let particles = [];
  let flowField = [];

  const initCanvas = () => {
    p.createCanvas(WIDTH, HEIGHT);
    p.background(0);
  };

  p.setup = () => {
    initCanvas();
    cols = p.floor(WIDTH / SCL);
    rows = p.floor(HEIGHT / SCL);

    flowField = new Array(cols * rows);

    for (let i = 0; i < 2000; i++) {
      particles[i] = new Particle(p, WIDTH, HEIGHT, SCL);
    }
  };

  p.draw = () => {
    p.background(0);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;
        let v = p.createVector(Math.cos(angle), Math.sin(angle));
        v.setMag(0.25);
        flowField[index] = v;
        xoff += INC;
        p.stroke(Math.tan(angle) * 255, Math.cos(angle) * 255, Math.sin(angle) * 255);
        p.push();
        p.translate(x * SCL, y * SCL);
        p.rotate(v.heading());
        p.strokeWeight(1);
        p.line(0, 0, SCL, 0);
        p.pop();
      }
      yoff += INC;
      zoff += 0.0005;
    }
  };
};
