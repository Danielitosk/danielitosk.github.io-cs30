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
   
}

// create the terrain
function generateTerrain() {
  let xoff = start;
  for (let x = 0; x < width ; x += terrainW) {
    stroke(0);
    let y = (noise(xoff) * height);
    rect(x, y, terrainW, height)
    xoff += inc
  }
  start += inc;

  noFill();
  let tallY = 0;   
  let tallX = 0;
  drawFlag(tallX, windowHeight - tallY);
}

// change width by using arrow keys
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
function drawFlag(x, y) {
  fill(255,0,0);
  line(x,y,x,y);
  rect(x,y,30,20);
  
}
  
  
