// Cars cars cars
// Daniel
// 18 Oct
// A program that displays cars and trucks in a road > <
let car;
let truck;

function setup() {
  createCanvas(windowWidth, windowHeight);
  car= new Vehicle(0);
  truck= new Vehicle(1);

}

function draw() {
  background(220);
  drawRoad();
  drawCar();
}

//function for making the road
let linespacing = 70;  //
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
  constructor(x,y,type,dir,speed){
    
    this.x = x;
    this.y= y;
    this.type = int(random(2));
    this.color = color(random(0,255),random(0,255),random(0,255));
    this.dir = dir;
    this.xSpeed = speed;
  }
  // making the car
  drawCar(){
    rectMode(CENTER);
    fill(this.color);
    rect(this.x,this.y,20,40);
    rect(this.x-10, this.y-10,5,5);
    rect(this.x+10,this.y-10,5,5);
    rect(this.x-10, this.y+10,5,5);
    rect(this.x+10, this.y+10,5,5);  
  }
  // making the truck
  drawTruck(){
    rectMode(CENTER);
    fill(this.color);
    rect(this.x,this.y,20,20);
    rect(this.x+20,this.y,20,40);
  }
  
  display() {
    //render cars and trucks to the screen
    if (this.type===0){  // 0-display car
      this.drawCar();
    }
    else if (this.type===1){ // 1-display truck

      this.drawTruck();
    }  
   
      
  }

  // move function
  move(){
    this.x += this.xSpeed;
    if (0> this.x){
      this.x
    }

  }
}



