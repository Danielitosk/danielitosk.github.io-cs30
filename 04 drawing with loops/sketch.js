// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
}
function draw() {
  myBackground();
  myForeground();
}
function myBackground() {  
  //y: 0  40  80  120 160
  let rectHeight=1;
  for(let y=0; y<height; y += rectHeight){
    let value= map(y,0,width,0,255)
    noStroke()
    fill(value,255-value,value);
    rect(0, y , width, rectHeight);
  }
}
function myForeground() {
  for (let x =0 ; x<mouseX; x=x+40){
    fill(0);
    circle(x,height/2,40);
    fill(255);
    text(x,x,height/2);
  }

}
let starCount =0;
randomSeed(999);
while(starCount,100){
  let x=random(0,widht);
  let y=random(0,height);
  circle(x,y,10);
  starCount++;
}