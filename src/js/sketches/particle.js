export default function Particle(gfx, w, h, scl) {
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
