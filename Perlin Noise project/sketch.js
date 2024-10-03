// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let inc = 0.01;
let spacing = 5;
let rectwidth= 10

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  stroke(20);
  fill(0, 0, 0);
  generateTerrain();
  drawFlag();

}

function generateTerrain() {
  let start = 0;
  let time = start;
  for (let x = 0; x < width + spacing; x += spacing) {
    stroke(10);
    let y = noise(time) * height;
    rect(x, height, rectwidth, -1 * y)
    time += inc;

  }
  start += inc;
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    if (rectwidth < 10) {
      rectwidth ++;
      console.log("daniel")
    }
  }
  if (keyCode === LEFT_ARROW) {
    if (rectwidth > 0) {
      rectwidth --;
    }
  }

//check max height
function drawFlag(x,y) {
    noFill();
    
    let highestY = y;
    let highestX = x;

    if (y > highestY); {
      rect(highestX, highestY, 1, 10);
      triangle(highestX, highestY + 10, highestX, highestY + 5, highestXx, highestY);
    }

  }
}
