export default p => {
  const colors = ["#f6f740", "#44ccff", "#ff47da"];
  const amount = 750;
  let freq;
  let amplitude;

  const canvas = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.95);
    p.imageMode(p.CENTER);
    p.angleMode(p.DEGREES);

    p.colorMode(p.HSL);
  };

  const randStroke = () => {
    let col = Math.floor(p.random() * colors.length);
    p.stroke(colors[col]);
    p.strokeWeight(1);
  };

  const sineWave = () => {
    randStroke();
    let y = (p.windowHeight * 0.95) / 2;
    p.beginShape();
    p.vertex(0, y);
    let pha = p.random(100);
    for (let i = 1; i < amount + pha; i++) {
      let sinOffset = Math.sin(freq * i);
      let sinX = i * (p.windowWidth / amount) - pha;
      let sinY = y + sinOffset * amplitude;
      p.bezierVertex(sinX, sinY, sinX, sinY, sinX, sinY);
    }
    p.endShape();
  };

  p.setup = () => {
    canvas();
    p.noFill();
    p.smooth();
    p.background(0);
    p.noLoop();
  };

  p.draw = () => {
    for (let i = 0; i < p.random(7) + 3; i++) {
      amplitude = p.random(100) + 25;
      freq = p.random(1.0) / 15;
      sineWave();
    }
  };
};
