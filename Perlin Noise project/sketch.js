// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let inc = 0.01;
let start= 0;
let terrainW = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  generateTerrain();
  // drawFlag();
}

function generateTerrain() {
  let xoff = start;
  for (let x = 0; x < width ; x += terrainW) {
    stroke(0);
    let y = (noise(xoff) * height);
    rect(x, y, terrainW, height)
    xoff += inc;

  }
  start += inc;
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    if (terrainW < 10) {
      terrainW = terrainW +1;
    }
  }
  if (keyCode === LEFT_ARROW) {
    if (terrainW > 1) {
      terrainW = terrainW-1;
    }
  }
}  

//check max height

function drawFlag() {
  noFill();
  let taller = Infinity;   
  for (let i = 0; i < Infinity; i++) {
    let x = noise(0, width)
    let y = noise(0, height);
    
    if (y < taller) {//is current "new taller" ?
      smallX = x;
      taller = y;
      rect(x,y,10,10)
    }
  }
  fill(250,0,0);
  circle(smallX, smallY, smallest);
}