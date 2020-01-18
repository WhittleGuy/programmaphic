export default p => {
  const ANG_RES = 360;

  //! Basic Canvas settings and creation
  p.initCanvas = () => {
    p.colorMode(p.RGB);
    p.angleMode(p.DEGREES);
    p.createCanvas(p.windowWidth, p.windowHeight * 0.95);
    p.frameRate(0.5);
    p.imageMode(p.CENTER);
    p.smooth();
  };

  //! Makes a circle & takes parameters to allow variance in loops
  const heptagon = (gfx, amp, adj) => {
    let points = [];
    let start = 0;
    //! Creating a heptagon of points
    for (let i = 0; i < 7; i++) {
      for (let j = start; j < start + Math.floor(ANG_RES / 7) + adj; j++) {
        if (i % 2 === 0) {
          points[j] = new point(
            gfx,
            gfx.windowWidth / 2 -
              amp *
                (1 -
                  (1 - Math.cos(p.TWO_PI / 14)) *
                    Math.sin(((7 / 2) * j * p.TWO_PI) / 360)) *
                Math.cos((j * p.TWO_PI) / 360),
            (gfx.windowHeight * 0.95) / 2 +
              amp *
                (1 -
                  (1 - Math.cos(p.TWO_PI / 14)) *
                    Math.sin(((7 / 2) * j * p.TWO_PI) / 360)) *
                Math.sin((j * p.TWO_PI) / 360)
          );
        }
        if (i % 2 === 1) {
          points[j] = new point(
            gfx,
            gfx.windowWidth / 2 -
              amp *
                (1 +
                  (1 - Math.cos(p.TWO_PI / 14)) *
                    Math.sin(((7 / 2) * j * p.TWO_PI) / 360)) *
                Math.cos((j * p.TWO_PI) / 360),
            (gfx.windowHeight * 0.95) / 2 +
              amp *
                (1 +
                  (1 - Math.cos(p.TWO_PI / 14)) *
                    Math.sin(((7 / 2) * j * p.TWO_PI) / 360)) *
                Math.sin((j * p.TWO_PI) / 360)
          );
        }
      }
      start += Math.floor(ANG_RES / 7);
    }

    //! Connecting all the points
    for (let i = 0; i < points.length - 1; i++) {
      gfx.line(
        points[i].pos.x,
        points[i].pos.y,
        points[i + 1].pos.x,
        points[i + 1].pos.y
      );
    }
  };

  const graphics = gfx => {
    gfx.stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255);
  };

  //! Onetime setup commands
  p.setup = () => {
    p.initCanvas();
  };

  //! Rendering
  p.draw = () => {
    p.background(0);
    let mult = Math.floor(Math.random() * 50) + 10;
    let size = Math.floor(Math.random() * 50) + 200;
    let inc = Math.floor(Math.random() * 10 + 5) / 1000;
    let rot = Math.floor(Math.random() * 45 + 1);
    let gfx = p.createGraphics(p.windowWidth, p.windowHeight * 0.95);
    graphics(gfx);
    p.translate(p.windowWidth / 2, (p.windowHeight * 0.95) / 2);
    heptagon(gfx, size, 4);
    for (let k = 0; k < mult; k++) {
      p.image(gfx, 0, 0);
      p.rotate(rot);
      p.scale(1 + inc);
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
