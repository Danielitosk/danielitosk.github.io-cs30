// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// variables for the noise function
let inc = 0.01;
let start = 0;
let terrainW = 10;
let averageY = 0;
let totalwidth = 0;
function setup() {  // canvas setup
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  generateTerrain();

}

// create the terrain

function generateTerrain() {
  let maxY = 0;
  let maxX = 0;
  let maxHeight = 0;
  let xoff = start;
  averageY = 0;
  //make the terrain
  for (let x = 0; x < width; x += terrainW) {
    stroke(0);
    let y = (noise(xoff) * height);
    averageY += y;
    rect(x, height, terrainW, -y)
    // finding the highest y,x value
    maxY = y
    if (maxY > maxHeight) {
      maxHeight = maxY;
      maxX = x;
    }
    xoff += inc
  }
  //positioning the flag in the highest point
  drawFlag(maxX, height - maxHeight - 30)
  start += inc;

  noFill();

  // finding average 
  totalwidth = (width / terrainW);
  averagePos = averageY/totalwidth;
  averageLine(averagePos);
}

// change width by using arrow keys
function keyReleased() {
  if (keyCode === RIGHT_ARROW) { // if right arrow pressed terrain gets wider
    if (terrainW < 10) {
      terrainW = terrainW + 1;
    }
  }
  if (keyCode === LEFT_ARROW) { // if left arrow pressed terrain gets narrower
    if (terrainW > 1) {
      terrainW = terrainW - 1;
    }
  }
}

//draw the red flag
function drawFlag(x, y) {
  fill(255, 0, 0);
  line(x, y, x, y + 40);
  rect(x, y, 25, 15);

}

//average line 
function averageLine(y) {
  stroke(230, 0, 0);
  line(0, height - y , width, height - y  );
}

