// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Challenge
let myBook2;
let myBook3;
let myBook4;

let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "Daniel", 123456789, "leatherbound", "515", width * 0.1);
  myBook2 = new Book("Anees is an excelent person", "Daniel", 123456789, "hardcover", "300", width * 0.13);
  myBook3 = new Book("Give me mango juice", "Daniel", 123456789, "leatherbound", "705", width * 0.16);
  myBook4 = new Book("Manifesto", "Daniel", 123456789, "softcover", "104", width * 0.19);
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
  myBook4.display();
}

class Book {
  // 1 construtor
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.coverType = cover;
    this.pageCount = pages;
    this.x = x;
  }

  //2. class methods
  display() {
    //render our book on the screen
    rectMode(CENTER); textAlign(CENTER);
    textSize(20);
    switch(this.coverType){
    case "softcover":
      fill(250,200,150);  break;
    case "hardcover":
      fill(120,255,255);  break;
    case "leatherbound":
      fill(150,100,15);   break;
    }
    rect(this.x, height/2, this.pageCount/10, 150);
    fill(255);
    text(this.title [0],this.x, height/2-50);


  }
  printOut() {
    // print out our data in a nice format
    print(this.title + "by" + this.author);
    print("Lenght:", + this.pageCount);
    print("ISBN" + this.isbn);
  }
}


