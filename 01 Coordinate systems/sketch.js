// Coordinate systems
// Daniel Florez
// 9/11/24
// Looking at how coordinates work in p5.js


let myNum=5
function setup() {
  print("Setup runs once, at the start")
  createCanvas(600,600);
}

function draw() {
  //runs over and over (targetting 60fps)
  background(150);
  drawCircles()
  
}

function drawCircles(){
  //draw some circles
  circle(width,0,60);
  fill(100,302,400)   // R, G ,B

  circle(0,height,60);
  fill(220,10,30)

  circle(width/2,height/2,60);
  fill(100,150,345)
  
  circle(width,height,60);
  fill(400,0,100)

  circle(0,0,60);
  fill(109,400,108) 


}
draw()