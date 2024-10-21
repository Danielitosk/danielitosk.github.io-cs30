// Cars cars cars
// Daniel
// 18 Oct

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
  car.display();
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
  constructor(type,speed){
    this.x = random(0,width);
    this.y= random(0,1);
    this.type = type;
    this.color = color(random(0,255));
    this.direction = random(0,1);
    this.xSpeed = speed;
  }

  drawcar(){
    rect(this.x,this.y,20,40);
    rect(this.x-10, this.y-10,5,5);
    rect(this.x+10,this.y-10,5,5);
    rect(this.x-10, this.y+10,5,5);
    rect(this.x+10, this.y+10,5,5);  
  }

  
  display() {
    //render cars to the screen
    rectMode(CENTER);
    switch (this.type){
    case car:
      fill(this.color);
      rect(this.x,this.y,20,40);
      fill(200)
      rect(this.x-10, this.y-10,5,5);
      rect(this.x+10,this.y-10,5,5);
      rect(this.x-10, this.y+10,5,5);
      rect(this.x+10, this.y+10,5,5);
      break;

    case truck:
      fill(this.color);
      rect(this.x,this.y,20,20);
      rect(this.x+20,this.y,20,40);

    }
      
    
  }



}



