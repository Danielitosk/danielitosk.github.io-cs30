// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  for (x = 0; x < windowWidth; x++){
    rect
    ellipse(10, y, 20, 20);
  }

}

class Field{
  constructor(x,y,width, height){
    this.x= x;
    this.y= y;
    this.width= width;
    this.height=height;
  }


}

function mousePressed() {
  if (mouseIsPressed){
    y= windowHeight;
  }
  else {
    return 0;
  }

}

