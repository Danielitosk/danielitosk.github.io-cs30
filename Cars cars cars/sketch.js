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
  car = new Vehicle(400, 500, 2, 3);
  truck = new Vehicle(800, 600, 1, 6);

}

function draw() {
  background(220);
  drawRoad();
  car.action();   //getting the cars to mpve
  truck.action();   //gettinf the trucks to move
  for (let i=0; i< east.length; i++){
    east[i].action;
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

//
class Vehicle {
  constructor(x, y, dir, speed) {
    this.x = x;
    this.y = y;
    this.type = int(random(2));
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.dir = dir;
    this.xSpeed = speed;
    this.frequency;
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
    rect(this.x + 60, this.y, 20, 40);
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

  mouseCLicked(){
    east.push(new Vehicle(400,500,east,8));
  }

  // move function
  move() {
    
    if (this.x <= 0) {
      this.x += width;
    }
    if (this.x >= width) {
      this.x -= width;
    }
    this.x += this.xSpeed;

    if (this.dir===0){
      this.xSpeed += 1;
    }

    else if (this.dir===1) {
      this.xSpeed -= 1;
    }

  }



  // increase velocity
  speedUp() {
    if (this.xSpeed < 1) {
      this.xSpeed += 1;
    }
  }
  //decrease velocity
  speedDown() {
    if (this.xSpeed > 30) {
      this.xSpeed -= 1;
    }
  }

  changeColor() {
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }

  // action
  action() {
    this.move();
    this.frequency = int(random(0, 100));
    if (this.frequency === 99) {
      this.changeColor();
    }
    else if (this.frequency === 98) {
      this.speedDown();
    }
    else if (this.frequency === 97) {
      this.speedUp();
    }
    this.display();
  }

}


