//Puzzle Game
// Daniel
// 29/10
//


let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 255, 0, 0, 0],
[255, 255, 255, 0, 0]];

let spaceKey = false;

function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;

  // background randomizer
  randomizeBG();

}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  countColours();
  greenthingy();
}

function randomizeBG() {  //loop
  for (let x = 0; x < NUM_ROWS; x++) {
    for (let y = 0; y < NUM_COLS; y++) {
      let r = int(random(0, 2));
      print(r);
      if (r === 0) {
        r = flip(x, y)
      }
      else {
        r = flip(y, x)
      }
    }
  }

}

function countColours() {
  let count = 0; // Total count for the grid

  for (let x = 0; x < NUM_ROWS; x++) {
    for (let y = 0; y < NUM_COLS; y++) {
      if (gridData[x][y] === 255) {
        count += 1;
      } else if (gridData[x][y] === 0) {
        count += 2;
      }
    }
  }
  // After counting all cells, check win conditions   
  fill(150);
  textAlign(CENTER);
  textSize(60);

  if (count === 20 || count === 40) {
    text("YOU WON", width / 2, height / 2);
    return greenthingy;
  }
}

function keyPressed() {
  if (keyCode === 32) { // spacebar variable (see ending)
    if (spaceKey === false) {
      spaceKey = true;
    }
    else {
      spaceKey = false;
    }
  }
}

function mousePressed() {
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array

  // Cheater cheater!
  if (keyCode === SHIFT && keyIsPressed) {  // click plus shift to cheat

    flip(currentCol, currentRow);
  }

  else {
    if (spaceKey === false) {
      //CROSS
      flip(currentCol, currentRow);
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    }

    else {
      //SQUARE
      flip(currentCol, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow +1);
      flip(currentCol + 1, currentRow + 1);
    }
  }

}

function flip(col, row) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }



  // print(count)
}

function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }

}

// CHALLENGE FEATURES
function greenthingy() {    // green highlight for the squares to be changed
  let x = currentCol * rectWidth
  let y = currentRow * rectHeight
  fill(0, 255, 0, 50);

  // change between square or cross BY PRESSING SPACEBAR
  if (spaceKey === false) {
    if (keyIsPressed && keyCode === SHIFT) {
      rect(x, y, rectWidth, rectHeight);
    }
    else {
      //cross
      rect(x, y + rectHeight, rectWidth, rectHeight)
      rect(x, y - rectHeight, rectWidth, rectHeight)
      rect(x - rectWidth, y, rectWidth, rectHeight)
      rect(x + rectWidth, y, rectWidth, rectHeight)
      rect(x, y, rectWidth, rectHeight);
    }
  }
  else {
    if (keyIsPressed && keyCode === SHIFT) {
      rect(x, y, rectWidth, rectHeight);
    }
    else {
      //square
      rect(x + rectWidth, y + rectHeight, rectWidth, rectHeight);
      rect(x, y + rectHeight, rectWidth, rectHeight);
      rect(x, y, rectWidth, rectHeight);
      rect(x + rectWidth, y, rectWidth, rectHeight);
    }
  }
}

// thanks for watching
