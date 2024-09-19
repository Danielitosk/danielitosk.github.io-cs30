// Interactive Scene
// Daniel Florez
// Sept 17, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;
let color=0

function setup() {
  createCanvas(windowHeight, windowWidth);
  //Soft blue background
  background('rgba(30%, 80%, 100%, 0.3)');
  myBackground()

}
let houseX=100
let houseY=738

//set the scene
function draw() {
  orange()
  circle(500,250,120);
  rectMode(CORNER)
  rect(0,800,windowWidth,windowHeight,0,0,0,0);
  character()
  house()
  movement()
  }
  
//set the character
function character() {

  line(800+x,780,800+x,700);
  line(820+x,730,800+x,700);
  line(800+x,780,820,800);
  line(780+x,730,800,700);
  line(800+x,780,780,800);
  pink()
  circle(800+x,680+y,40);
  
}

function myBackground() {  
  
  let rectHeight=1;
  for(let y=0; y<height; y += rectHeight){
    noStroke()
    fill(y/3);
    rect(0, y , width, rectHeight);

//character's house
function house() {
  rectMode(CENTER)
  oak()
  rect(houseX,houseY,124,124,0,0,0,0);
  brown()
  triangle(houseX-75, houseY-62, houseX, 620, houseX+75, houseY-62);
  rect(houseX,houseY,124/3,124/3,0,0,0,0);
  rect(houseX,houseY+124/3,124/3,124/3,0,0,0,0);
}

//interaction when mouse is clicked
function mousePressed() {
  stroke('deeppink');
  strokeWeight(2);
  }
function mouseReleased() {
  stroke('black');
}
function person() {

}

//colors functions
function orange() {
  fill(500,200,10);
}
function brown() {
  fill(149,68,53);
}
function oak() {
  fill(242, 210, 189);
}

function pink() {
  fill(242, 210, 189)
}