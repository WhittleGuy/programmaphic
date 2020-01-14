//! Original tutorial: https://medium.com/front-end-weekly/learning-the-p5-canvas-drawing-library-in-es6-and-webpack-bf514a679544
//! Grouping into multiple functions: https://github.com/eatspaint/generative/blob/master/js/sketches/moire.js

export default p => {
  //* Creating the main canvas
  const canvas = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.9);
    p.imageMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.translate(p.windowWidth / 2, (p.windowHeight * 0.9) / 2);
    p.colorMode(p.HSL);
    p.background(0);
  };

  //* Creating the graphics properties
  const graphics = gfx => {
    gfx.colorMode(gfx.HSL);
    gfx.stroke("#5bffce");
    gfx.strokeWeight(3);
  };

  //* Creating the points on the graphics "object"
  const points = (gfx, count) => {
    for (let i = 0; i < count; i++) {
      let x = gfx.random(0, gfx.windowWidth + 1);
      let y = gfx.random(0, gfx.windowHeight + 1);
      gfx.point(x, y);
    }
  };

  //* Only run once. Calls initializing functions, generates image, generates rotated image.
  p.setup = () => {
    canvas();

    let gfx = p.createGraphics(p.windowWidth, p.windowHeight * 0.9);

    graphics(gfx);
    points(gfx, 2500);

    p.image(gfx, 0, 0);
    p.rotate(1);
    p.image(gfx, 0, 0);

    p.noLoop(); //* Stops draw function from looping
  };

  p.draw = () => {};
};
