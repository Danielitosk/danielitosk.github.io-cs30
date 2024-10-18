// 
// Your Name
// 
//


let currentBackground = 0;
let houseX = 100;
let houseY = 738;


function setup() {
  createCanvas(windowWidth, windowHeight);
    
}
//set the scene
function draw() {
  if (currentBackground === 0) {
    background(135,206,235);
  }
  else if (currentBackground === 1) {
    myBackground();
  }
  else if (currentBackground === 2) {
    background(244,215,114);
  }
  else if (currentBackground === 3) {
    background(253, 94, 83);
  }
  textName();
  orange();
  circle(500, 250, 120);
  rectMode(CORNER);
  sand();
  rect(0, 800, windowWidth, windowHeight, 0, 0, 0, 0);
  character();
  things();
  
 
   
}

//set the character
function character() {
  fill(1000)
  circle(mouseX,678,30)
  fill(1000)
  circle(mouseX,715,50)
  fill(1000)
  circle(mouseX,770,70)
  noStroke()
}

//background2
function myBackground() {

  let rectHeight = 1;
  for (let y = 0; y < height; y += rectHeight) {
    let value = map(y, 0, width, 0, 40)
    noStroke()
    fill(value, 50 - value, value + 90);
    rect(0, y, width, rectHeight);
    fill(value, 50 - value, value + 90);
    circle(800 + x, 680 + y, 40);
  }
}

//environment
function things() {
  //house
  noStroke
  rectMode(CENTER)
  oak()
  rect(houseX, houseY, 124, 124, 0, 0, 0, 0);
  brown()
  triangle(houseX - 75, houseY - 62, houseX, 620, houseX + 75, houseY - 62);
  rect(houseX, houseY, 124 / 3, 124 / 3, 0, 0, 0, 0);
  rect(houseX, houseY + 124 / 3, 124 / 3, 124 / 3, 0, 0, 0, 0);

  //trees
  brown();
  noStroke()
  rect(1000,725,20,150);
  fill(10,200,30);
  circle(970, 650, 120);
  fill(10,200,30);
  circle(1030, 650, 120);
  fill(10,200,30);
  circle(1000, 603, 125);
  brown();
  rect(1300,725,20,150);
  fill(10,200,30);
  circle(1270, 650, 120);
  fill(10,200,30);
  circle(1330, 650, 120);
  fill(10,200,30);
  circle(1300, 603, 125);
  brown();
  rect(1600,725,20,150);
  fill(10,200,30);
  circle(1570, 650, 120);
  fill(10,200,30);
  circle(1630, 650, 120);
  fill(10,200,30);
  circle(1600, 603, 125);
}



//switch backgounds
function mousePressed() {
  currentBackground ++;
  if (currentBackground>3) {currentBackground=0}
}

//colors functions
function orange() {
  fill(500, 200, 10);
}
function brown() {
  fill(149, 68, 53);
}
function oak() {
  fill(242, 210, 189);
}

function pink() {
  fill(242, 210, 189)
}
function sand() {
  fill(194, 178, 128)
}

function textName() {
  textSize(20)
  fill(100,100,100)
  text("Daniel Florez",windowWidth-200, windowHeight-200)
}