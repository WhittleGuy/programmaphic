export default p => {
  const WIDTH = p.windowWidth;
  const HEIGHT = p.windowHeight * 0.95;
  const H_CENTER = WIDTH / 2;
  const V_CENTER = HEIGHT / 2;

  // polygon of numSides and amp drawn onto gfx
  const polygon = (gfx, numSides, amp) => {
    const SIDE_RES = p.TWO_PI / numSides; //arc anle for each side
    let start = 0;
    let vertices = [];

    //stores vertices for the polygon
    for (let i = 0; i < numSides; i++) {
      vertices[i] = [
        H_CENTER + amp * Math.cos(start),
        V_CENTER + amp * Math.sin(start)
      ];
      start += SIDE_RES;
    }

    //draws a line between each set of vertices
    for (let j = 0; j < numSides - 1; j++) {
      gfx.line(
        vertices[j][0],
        vertices[j][1],
        vertices[j + 1][0],
        vertices[j + 1][1]
      );
    }

    //connects the last vertex to the starting vertex
    gfx.line(
      vertices[0][0],
      vertices[0][1],
      vertices[numSides - 1][0],
      vertices[numSides - 1][1]
    );
  };

  p.setup = () => {
    p.colorMode(p.RGB);
    p.createCanvas(WIDTH, HEIGHT);
    p.imageMode(p.CENTER);
    p.frameRate(1);
    p.smooth();
  };

  p.draw = () => {
    let gfx = p.createGraphics(WIDTH, HEIGHT);
    let mult = Math.floor(Math.random() * 50 + 25); //number of scaled up copies
    let sides = Math.floor(Math.random() * 9 + 3); //sides of the polygon
    const ANGLES = [1, 2, 15, 22.5, 45, 90, 180]; //available angles of rotation
    let rot = ANGLES[Math.floor(Math.random() * ANGLES.length)]; //selection of angle of rotation

    p.background(0);
    p.translate(H_CENTER, V_CENTER);
    graphics(gfx);
    polygon(gfx, sides, 200);
    p.image(gfx, 0, 0);
    for (let k = 0; k < mult; k++) {
      p.rotate(p.PI * (rot / 180));
      p.scale(1.01);
      p.image(gfx, 0, 0);
    }
  };
};

const graphics = gfx => {
  gfx.stroke(
    Math.random() * 235 + 20,
    Math.random() * 235 + 20,
    Math.random() * 235 + 20
  );
  gfx.strokeWeight(0.5);
};
