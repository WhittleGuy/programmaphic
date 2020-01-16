//! https://www.youtube.com/watch?v=BjoM9oKOAKY

export default p => {
  const INC = 0.05;
  const SCL = 20;
  const WIDTH = p.floor(window.innerWidth - (window.innerWidth % 20));
  const HEIGHT = p.floor(
    window.innerHeight * 0.95 - ((window.innerHeight * 0.95) % 20)
  );
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
    //p.background(255);
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
        p.stroke(0, 50);
        p.push();
        p.translate(x * SCL, y * SCL);
        p.rotate(v.heading());
        p.strokeWeight(1);
        //p.line(0, 0, SCL, 0);
        p.pop();
      }
      yoff += INC;
      zoff += 0.0001;
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowField);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  };
};

function Particle(gfx, w, h, scl) {
  this.pos = gfx.createVector(gfx.random(w), gfx.random(h));
  this.vel = gfx.createVector(0, 0);
  this.acc = gfx.createVector(0, 0);
  this.maxSpeed = 5;
  this.prevPos = this.pos.copy();

  this.update = () => {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.follow = vectors => {
    let x = gfx.floor(this.pos.x / scl);
    let y = gfx.floor(this.pos.y / scl);
    let index = x + y * (w / scl);
    let force = vectors[index];
    this.applyForce(force);
  };

  this.applyForce = force => {
    this.acc.add(force);
  };

  this.show = () => {
    gfx.stroke(255, scl / 3);
    gfx.strokeWeight(1);

    gfx.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    //gfx.point(this.pos.x, this.pos.y);
    this.updatePrev();
  };

  this.updatePrev = () => {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };

  this.edges = () => {
    if (this.pos.x > w) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = w;
      this.updatePrev();
    }
    if (this.pos.y > h) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = h;
      this.updatePrev();
    }
  };
}
