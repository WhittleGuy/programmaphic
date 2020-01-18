export default p => {
  const ANG_RES = 360;

  //! Basic Canvas settings and creation
  p.initCanvas = () => {
    p.colorMode(p.RGB);
    p.angleMode(p.DEGREES);
    p.createCanvas(p.windowWidth, p.windowHeight * 0.95);
    p.frameRate(1);
    p.imageMode(p.CENTER);
    p.translate(p.windowWidth / 2, (p.windowHeight * 0.95) / 2);
    p.smooth();
  };

  //! Makes a circle & takes parameters to allow variance in loops
  p.heptagonSide = (amp, adj) => {
    let points = [];
    let start = 0;
    //! Creating a heptagon of points
    for (let i = 0; i < 1; i++) {
      for (let j = start; j < start + Math.floor(ANG_RES / 7) + adj; j++) {
        points[j] = new point(
          p,
          p.windowWidth / 2 +
            amp *
              (1 -
                (1 - Math.cos(p.TWO_PI / 14)) *
                  Math.sin(((7 / 2) * j * p.TWO_PI) / 360)) *
              Math.cos((j * p.TWO_PI) / 360),
          p.windowHeight / 2 +
            amp *
              (1 -
                (1 - Math.cos(p.TWO_PI / 14)) *
                  Math.sin(((7 / 2) * j * p.TWO_PI) / 360)) *
              Math.sin((j * p.TWO_PI) / 360)
        );
      }
      start += Math.floor(ANG_RES / 7);
    }

    //! Connecting all the points
    for (let i = 0; i < points.length - 1; i++) {
      p.line(
        points[i].pos.x,
        points[i].pos.y,
        points[i + 1].pos.x,
        points[i + 1].pos.y
      );
    }
  };

  p.heptagon = (amp, adj) => {
    for (let i = 1; i <= 40; i++) {
      //p.stroke(150, p.random() * 55 + 200, 190);
      p.stroke(255);
      p.heptagonSide(amp, adj);
      p.rotate(360 / 7);
      p.translate(230, -510);
    }
  };

  //! Onetime setup commands
  p.setup = () => {
    p.initCanvas();
  };

  //! Rendering
  p.draw = () => {
    p.background(0);
    let mult = Math.floor(Math.random() * 50) + 50;
    let size = Math.floor(Math.random() * 50) + 100;
    let inc = Math.floor(Math.random() * 3);
    let rot = Math.floor(Math.random() * 15);
    for (let k = 0; k < mult; k++) {
      p.heptagon(size, 4);
      p.rotate(rot);
      size += inc;
    }
  };
};

//! Definition of a point
function point(gfx, x, y) {
  this.pos = gfx.createVector(x, y);

  this.show = () => {
    gfx.strokeWeight(1);
  };
}
