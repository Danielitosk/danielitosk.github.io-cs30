// Cars cars cars
// Daniel
// 18 Oct
// A program that displays cars and trucks in a road > <
let car;
let truck;
let east = [];
let west = [];

function setup() {  
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    east.push(new Vehicle(0, random(height / 2 - 171, height / 2 -25), 0, 10));  //cast cars going to the east, starting at x=0
  }
  for (let i = 0; i < 20; i++) {
    west.push(new Vehicle(width, random(height / 2 + 171, height / 2 +25), 1, 10));   //cast cars going to the west, staring at x total width
  }
}

function draw() {
  background(220);
  drawRoad();
  for (let i = 0; i < east.length; i++) { //loop to make 20 cars heading east 
    east[i].action();
  }
  for (let i = 0; i<west.length; i++){  //loop to make 20 cars heading west 
    west[i].action();
  }
}

//function for making the road
let linespacing = 70;  // middle lines separation
function drawRoad() {
  noStroke();
  fill(10);
  rectMode(CENTER);
  rect(0, height / 2, width * 2, height * 0.4);

  for (let i = 10; i < width; i += linespacing) {
    fill(250);
    rect(i, height / 2, 30, 5);
  }

}

// creating our class
class Vehicle { 
  constructor(x, y, dir, speed) {
    this.x = x;
    this.y = y;
    this.type = int(random(2));
    this.color = color(random(0, 255), random(0, 255), random(0, 255));  
    this.dir = dir;  // direction
    this.xSpeed = speed;
    this.frequency;  // chance to run a function in action
  }
  // making the car
  drawCar() {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, 40, 20);
    rect(this.x - 10, this.y - 10, 5, 5);
    rect(this.x + 10, this.y - 10, 5, 5);
    rect(this.x - 10, this.y + 10, 5, 5);
    rect(this.x + 10, this.y + 10, 5, 5);
  }
  // making the truck
  drawTruck() {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, 90, 40);
    // truck facing west
    if (this.dir === 0){
      rect(this.x + 60, this.y, 20, 40);
    }
    else if (this.dir === 1){
      rect(this.x - 60, this.y, 20, 40);
    }

  }

  display() {
    //render cars and trucks to the screen
    if (this.type === 0) {  // 0-display car
      this.drawCar();
    }
    else if (this.type === 1) { // 1-display truck
      this.drawTruck();
    }


  }
  // move function
  move() {
    // go east
    if (this.dir === 0) {
      this.x += this.xSpeed;
      if (this.x >= width) {
        this.x -= width;
      }
    }
    // go west 
    else if (this.dir === 1) {
      this.x -= this.xSpeed;
      if (this.x <= 0) {
        this.x += width;
      }
    }
  }

  // increase velocity
  speedUp() {
    this.xSpeed += 1;
  }
  //decrease velocity
  speedDown() {
    this.xSpeed -= 1;
  }

  changeColor() {   // color randomizer
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }

  // action function
  action() {
    this.move();     // every frame
    this.frequency = int(random(0, 100));
    if (this.frequency === 99) {    //1% chance to call each frame
      this.changeColor();
    }
    else if (this.frequency === 98) {   //1% chance to call each frame
      this.speedDown();
    }
    else if (this.frequency === 97) {   //1% chance to call each frame
      this.speedUp();
    }
    this.display();   //every frame
  }

}


