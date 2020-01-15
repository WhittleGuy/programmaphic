export default function Particle(gfx) {
  this.pos = gfx.createVector(Math.random() * 500, Math.random() * 250000);
  this.vel = gfx.createVector(0, 0);
  this.acc = gfx.createVector(0, 0);

  this.update = () => {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = force => {
    this.acc.add(force);
  };

  this.show = () => {
    gfx.stroke(0);
    gfx.strokeWeight(2);
    gfx.point(this.pos.x, this.pos.y);
  };
}
