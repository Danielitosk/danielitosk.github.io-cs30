// mousewheel,map,lerp
// Daniel
// 25 september

let x, y, d = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; y = height / 2;
  noFill();
}

function draw() {
  //background(220);
  //move the circle

  x = lerp(x, mouseX, 0.10);
  y = lerp(y, mouseY, 0.10);

  let r = map(x, 0, width, 0, 255);
  let g = map(x, 0, height, 0, 255);
  let b = map(x, 0, width, 255, 0);
  stroke(r, b, g);

  circle(x, y, d);
}

function mouseWheel(event) {
  print(event.delta);
  //neg: Up scroll
  //pos: Down scroll
  if (event.delta > 0) {
    d -= 10;
    if (d < 10) d = 10;
  }
  else {
    d += 10
  }
}
