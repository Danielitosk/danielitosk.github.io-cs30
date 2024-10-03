// Finding min/max
// Daniel
// Oct 03

const NUM_CIRCLES = 40;
let seed;   // stabilize random numbers

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  background(220);
  randomSeed(seed);
  drawCircles()
}
function drawCircles() {
  // draw NUM_CIRCLES on the screen
  // with random x,y,d. Fill smallest one red
  noFill();
  let smallest = Infinity;   // dummy value
  for (let i = 0; i < NUM_CIRCLES; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 60);
    
    if (d <smallest) {//is current circle "new smallest" ?
      smallest = d;
      smallX = x;
      smallY = y;
      circle (x,y,d);
    }
  }
  fill(250,0,0);
  circle(smallX, smallY, smallest);
  


}