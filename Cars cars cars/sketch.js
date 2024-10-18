// Cars cars cars
// Daniel
// 18 Oct


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

let linespacing = 100;
function drawRoad() {
  noStroke();
  fill(10);
  rectMode(CENTER);
  rect(0, height / 2, width * 2, height * 0.4);

  for (let i = 0; i < width; i += linespacing) {
    rect(i, height / 2, 30, 10);

  }
}

