// Project Title
// Your Name
// Date
//

let scale = 15;
let leaflayer= 1;
function setup() {
  createCanvas(500, 500);
  
}
function draw() {
  background(255);  // call background every frame so the tree updates every frame
  drawTree(width / 2, height * 0.9, 90, 6);

}
function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {

  let treeAngle = map(mouseX, 0, width, 3, 13); // variable for the interactive angles

  strokeWeight(1);
  strokeWeight(depth - 0.5);

  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale; //calculate endpoints of current branch

    let y2 = y1 - sin(radians(angle)) * depth * scale; //using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);
    
    if (depth < leaflayer) {  // for not drawing the leaves in the trunk
      drawLeaf(x2, y2, depth * 10);
    }

    //for a 3-branch tree:

    drawTree(x2, y2, angle +treeAngle, depth - 1);  // if the user swipes right, the tree angle increments
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle -treeAngle, depth - 1);  // if the user swipes left, the tree angle decreases
  }

  // create the balloon leaves
  function drawLeaf(x, y, d) {
    fill(random(0, 255), random(0, 255), random(0, 255), 300);

    circle(x, y, d);
  }


}

function keyPressed(){
  if (keyCode===88){
    leaflayer= leaflayer-1;
  }
  else if( keyCode===90){
    leaflayer= leaflayer+1;
  }
}