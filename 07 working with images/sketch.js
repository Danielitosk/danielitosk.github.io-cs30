// Working with images
// Daniel
// 04 oct
//

let lionL, lionR;
let facingRight = true;
let pinImages = [];  //list
let currentFrame = 0;

function preload() {
  lionL = loadImage('/assets/lion-left.png');
  lionR = loadImage('/assets/lion-right.png');
  for (let i = 0; i < 9; i + 1) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"))
  }


}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  imageMode(CENTER);
  drawLions()
}

function drawPinwheel() {
  //pinweel frames 0-8
  for (let i = 0; i < 9; i++);
  image(pinImages[currentFrame], width / 2, height / 2)
  currentFrame++;
  if (currentFrame > 8) currentFrame = 0
}

function drawLions() {
  //check the mouse movement direction (x)
  if (mouseX > pmouseX) facingRight = true;
  else if (mouseX < pmouseX) facingRight = false


  // display one of the lion images 
  if (facingRight) {
    image(lionR, mouseX, mouseY, lionR.width / 2, lionR.height / 2);
  }
  else {
    image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height / 2);

  }

}