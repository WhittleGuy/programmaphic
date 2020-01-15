//! Original tutorial: https://medium.com/front-end-weekly/learning-the-p5-canvas-drawing-library-in-es6-and-webpack-bf514a679544
//! Grouping into multiple functions: https://github.com/eatspaint/generative/blob/master/js/sketches/moire.js

export default p => {
  const colors = ["#404040", "ffffff", "red"];
  const amount = 1000;
  let freq = p.random(1.0) / 15;
  let offset = p.random(200) + 5;

  const canvas = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.9);
    p.imageMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.translate(p.windowWidth / 2, (p.windowHeight * 0.9) / 2);
    p.colorMode(p.HSL);
  };

  const randStroke = () => {
    let col = Math.floor(p.random() * 3);
    p.stroke(colors[col]);
    p.strokeWeight(1);
  };

  const sineWave = () => {
    for (let i = 0; i < 20; i++) {
      randStroke();

      let y = (p.windowHeight * 0.9) / 2;

      p.beginShape();
      p.vertex(0, y);
      for (let i = 1; i < amount; i++) {
        let sinOffset = Math.sin(freq * i);
        let sinX = i * (p.windowWidth / amount);
        let sinY = y + sinOffset * offset;
        p.bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);
      }
      p.endShape();
    }
  };

  p.setup = () => {
    canvas();
    p.noFill();
    p.smooth();
    p.background(0);
    p.noLoop();
  };

  p.draw = () => {
    sineWave();
  };
};
