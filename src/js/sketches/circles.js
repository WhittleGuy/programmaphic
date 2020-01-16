export default p => {
  const ANG_RES = 360;
  const BEG_AMP = (p.windowHeight * 0.95) / 3;

  const INC = 0.01;
  const BEG_VAR = 30;

  let mult = p.floor(Math.random() * 4 + 2);

  //! Basic Canvas settings and creation
  p.initCanvas = () => {
    p.colorMode(p.RGB);
    p.angleMode(p.DEGREES);
    p.createCanvas(p.windowWidth, p.windowHeight * 0.95);
    p.frameRate(5);
    p.imageMode(p.CENTER);
    p.translate(p.windowWidth / 2, (p.windowHeight * 0.95) / 2);
    p.smooth();
  };

  p.circle = (seed, amp, revs, variance) => {
    let points = [];
    let xoff = seed;
    let yoff = seed;
    //! Creating a circle of points
    for (let i = 0; i < ANG_RES * revs; i++) {
      let r = p.noise(xoff, yoff);
      points[i] = new point(
        p,
        p.windowWidth / 2 +
          Math.cos(i * 0.0174532925) * amp +
          Math.tan(r) * variance, //? variance by noise
        (p.windowHeight * 0.95) / 2 +
          Math.sin(i * 0.0174532925) * amp -
          Math.tan(r) * variance //? variance by noise
      );
      xoff += INC;
      xoff += INC;
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
    //! Connecting the first and last point
    p.line(
      points[0].pos.x,
      points[0].pos.y,
      points[ANG_RES - 1].pos.x,
      points[ANG_RES - 1].pos.y
    );
  };

  //! Onetime setup commands
  p.setup = () => {
    p.initCanvas();
  };

  //! Rendering
  p.draw = () => {
    p.background(0);

    for (let i = 1; i <= mult; i++) {
      //p.stroke(150, p.random() * 55 + 200, 190);
      p.stroke(255);
      p.circle(
        Math.random() * 10,
        i * (BEG_AMP / mult),
        p.floor(Math.random() * 5 + 2),
        i * (BEG_VAR / mult)
      );
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
