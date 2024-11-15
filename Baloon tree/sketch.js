// Project Title
// Your Name
// Date
//

let scale = 15;

function setup() {
  createCanvas(500, 500);
  
}
function draw() {
  background(255);
  drawTree(width / 2, height * 0.9, 90, 6);

}
function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {

  let treeAngle = map(mouseX, 0, width, 3, 13);

  strokeWeight(1);
  strokeWeight(depth - 0.5);

  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale; //calculate endpoints of current branch

    let y2 = y1 - sin(radians(angle)) * depth * scale; //using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);

    if (depth < 5) {
      drawLeaf(x2, y2, depth * 10);
    }

    //for a 3-branch tree:

    drawTree(x2, y2, angle +treeAngle, depth - 1);
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle -treeAngle, depth - 1);
  }


  function drawLeaf(x, y, d) {
    fill(random(0, 255), random(0, 255), random(0, 255), 300);

    circle(x, y, d);
  }


}
