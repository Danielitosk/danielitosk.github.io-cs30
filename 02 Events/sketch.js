// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variable Scope
let rX = 50;      let rY=50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); //corner
}

function draw() {
  background(220);
  // moving rectangle
  if(keyIsPressed && key==="s"){
    rY +=2;
    if(rY > height) rY=0;

  }
  if(keyIsPressed && key==="d"){
  rX +=2;
    if(rY > height) rY=0;
  }

if (keyIsPressed && key==="a"){
  rX -=2;
    if(rY > height) rY=0;
}

if (keyIsPressed && key==="w"){rY -=2;
  if(rY > height) rY=0;
}
  fill(100,255,250);
  rect(rX, rY, 100, 50, 10, 20, 0, 10);
  
}

