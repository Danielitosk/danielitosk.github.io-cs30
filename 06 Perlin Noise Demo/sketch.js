// Perlin Noise Demo
// Daniel Santiago
// setp 27,2024

//random()  vs  noise()

let cTime = 5; //current noise time
let cInterval = 0.02; //how fast we move down the noise graph


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(2);
}

function draw() {
  background(220);
  line(width / 2, 0, width / 2, height);

  //draw with random()
  randomCircle();
  //draw with noise()
  perlinCircle();

  staircase();

}

function randomCircle() {
  //draw circle that uses random()
  //unpredictable size (later, color)
  let cSize = random(0, 255);
  fill(cSize, 255 - cSize, cSize + 255)
  circle(width / 4, height / 2, cSize);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(round(cSize), width / 4, height / 4);

}
function perlinCircle() {
  //draw circle using noise()
  // unpredictable size (later, color)
  let cSize = noise(cTime);  //0-1
  cSize = map(cSize, 0, 1, 1, 255);
  let r = noise(cTime);    //0-1
  let g = noise(cTime + 2);  //0-1
  let b = noise(cTime + 5);  //0-1

  r = map(r, 0, 1, 0, 255);
  g = map(g, 0, 1, 0, 255);
  b = map(b, 0, 1, 0, 255);
  fill(r, g, b);
  circle(width * 0.75, height / 2, cSize);
  text(round(cSize), width * 0.75, height / 4);
  cTime += cInterval;

}

function staircase() {
  //draw a staircase using loops
  randomSeed(2);
  for (let x = 0; x < width; x += 1){
    noFill()
    stroke(255);
    let rectHeight = random(50, 500);
    rect(x, height, 20, -rectHeight);
  }

}
