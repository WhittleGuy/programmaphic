export default p => {
  //! Basic Canvas settings and creation
  p.initCavas = () => {
    p.colormode(p.HSL);
    p.angleMode(p.DEGREES);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.framerate(30);
  };
  //! Onetime setup commands
  p.setup = () => {
    initCanvas();
  };

  //! Rendering
  p.draw = () => {};
};
