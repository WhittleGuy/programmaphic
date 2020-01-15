export default p => {
  const COLORS = ["#f6f740", "#44ccff", "#ff47da"];
  const RES = 750;
  let freq;
  let amp;

  const initCanvas = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.95);
  };

  // Defines a stroke color from the color array
  const randStroke = () => {
    let col = Math.floor(p.random() * COLORS.length);
    p.stroke(COLORS[col]);
    p.strokeWeight(1);
  };

  // Creates a singular sine wave
  const sineWave = () => {
    randStroke();
    let y = (p.windowHeight * 0.95) / 2;
    p.beginShape();
    p.vertex(0, y);
    let pha = p.random(100); //phase shifts each wave
    for (let i = 1; i < RES + pha; i++) {
      let sinOffset = Math.sin(freq * i);
      let sinX = i * (p.windowWidth / RES) - pha;
      let sinY = y + sinOffset * amp;
      p.bezierVertex(sinX, sinY, sinX, sinY, sinX, sinY);
    }
    p.endShape();
  };

  p.setup = () => {
    initCanvas();
    p.noFill();
    p.smooth();
    p.background(0);
    p.noLoop();
  };

  p.draw = () => {
    for (let i = 0; i < p.random(7) + 3; i++) {
      amp = p.random(100) + 25;
      freq = p.random(1.0) / 15;
      sineWave();
    }
  };
};
