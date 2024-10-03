// State variables
// Daniel
// Sept 25,2024

//Global variables
let currentColor = 0;    //0,1,2
let circleSize =50; 
let myColor ;
let growing = false;  //2-state (true/false)

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(150,110,245)
}

function draw() {
  background(255);

  // circle code- fill value
  switch(currentColor){
    case 0:
      fill(255,0,0);   break;
    case 1:
      fill(myColor);  break;
    case 2:
      fill(0,255,255);  break;

  }

  //circle: change the color state (variable)
  if (frameCount % 50 === 0) {

  currentColor ++;
  if (currentColor>2) currentColor=0;
  }

  //circle: modify size 
  if(growing)circleSize += 2;
  else circleSize -=2


  //circle 
  circle(width/2,height/2,circleSize)


}

function keyPressed() {
  // called automatically when a key is pressed
  if(key==="a") {
    growing= !growing;
  }

}