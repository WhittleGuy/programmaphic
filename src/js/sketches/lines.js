//! https://www.youtube.com/watch?v=BjoM9oKOAKY

export default p => {
  const INC = 0.1;
  const SCL = 25;
  const WIDTH = p.windowWidth;
  const HEIGHT = p.windowHeight * 0.95;
  let cols, rows;
  let zoff = 0;

  const initCanvas = () => {
    p.createCanvas(WIDTH, HEIGHT);
    p.background(0);
  };

  p.setup = () => {
    initCanvas();
    cols = p.floor(WIDTH / SCL);
    rows = p.floor(HEIGHT / SCL);
  };

  p.draw = () => {
    p.background(0);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;
        let v = p.createVector(Math.cos(angle), Math.sin(angle));
        v.setMag(0.25);

        xoff += INC;
        p.stroke(
          (1 / Math.cos(angle)) * 255,
          (1 / Math.tan(angle)) * 255,
          Math.sin(angle) * 255
        );
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
