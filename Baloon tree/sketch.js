// Project Title
// Your Name
// Date
//

let seed;
let scale = 15;
let leaflayer= 5;
function setup() {
  createCanvas(500, 500);
  seed= random(100);
}
function draw() {
  background(255);  // call background every frame so the tree updates every frame
  drawTree(width / 2, height * 0.9, 90, 6);
  randomSeed(seed);  // fixed random colors and sizes
}
function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {

  let treeAngle = map(mouseX, 0, width, 3, 13); // variable for the interactive angles

  strokeWeight(1);
  strokeWeight(depth - 0.5);    // the trunk is thicker and the branches thinner

  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale; //calculate endpoints of current branch

    let y2 = y1 - sin(radians(angle)) * depth * scale; //using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);
    
    if (depth < leaflayer) {  
      drawLeaf(x2, y2, random(3,50));
    }

    //for a 3-branch tree:

    drawTree(x2, y2, angle +treeAngle, depth - 1);  // if the user swipes right, the tree angle increments
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle -treeAngle, depth - 1);  // if the user swipes left, the tree angle decreases
  }

  // create the balloon leaves
  function drawLeaf(x, y, d) {
    strokeWeight(1);
    circle(x, y, d);
    fill(random(0, 255), random(0, 255), random(0, 255), 300);
  }
}

function keyPressed(){
  if (keyCode===88 &leaflayer > 0){
    leaflayer= leaflayer-1;
  }
  else if( keyCode===90 && leaflayer < 7){
    leaflayer= leaflayer+1;
  }

 
}