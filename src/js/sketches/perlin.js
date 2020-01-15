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

  const initCanvas = () => {
    p.createCanvas(WIDTH, HEIGHT);
  };

  p.setup = () => {
    initCanvas();
    cols = p.floor(WIDTH / SCL);
    rows = p.floor(HEIGHT / SCL);

    for (let i = 0; i < 500; i++) {
      particles[i] = new Particle(p);
    }
  };

  p.draw = () => {
    p.background(255);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = (x + y * WIDTH) * 4;
        let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;
        let v = p.createVector(Math.cos(angle), Math.sin(angle));
        xoff += INC;
        p.stroke(0);
        p.push();
        p.translate(x * SCL, y * SCL);
        p.rotate(v.heading());
        p.line(0, 0, SCL, 0);
        p.pop();
      }
      yoff += INC;
      zoff += 0.001;
    }

    for (let i = 0; i < particles.length; i++) {
      particles[0].update();
      particles[0].show();
    }
  };
};
