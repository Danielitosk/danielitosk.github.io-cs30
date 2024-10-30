// Puzzle start
// Daniel
// 28/10
//


let grid = [[0, 255, 255, 0, 0],
[255, 0, 255, 0, 255],
[0, 0, 255, 255, 0]];

const NUM_ROWS = 3;
const NUM_COLS = 5;

let rectHeight, rectWidth;
let col, row;
row = getArrayX();
col = getArrayY();

function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(grid[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}


function getArrayY() {
  return int(mouseY / rectHeight);
}

function getArrayX() {
  return int(mouseX / rectWidth);
}

function mousePressed() {
  if (grid[row][col] === 0) {
    grid[row][col] = 255;
  }

  else {
    grid[row][col] = 255;
  }

}


function setup() {
  createCanvas(500, 300);
  rectWidth = 500 / NUM_COLS;
  rectHeight = 300 / NUM_ROWS;
}

function draw() {
  row = getArrayX();
  col = getArrayY();

  background(220);
  renderGrid();
  if (frameCount % 30 === 0) {
    grid[int(random(NUM_ROWS))][int(random(NUM_COLS))] = random(255);

  }
  print(mouseX, rectWidth, mouseX / rectWidth);
  mousePressed();
}




