/* 
Filename: complex_code.js 
Content: Complex code demonstrating object-oriented programming using classes and inheritance in JavaScript.
*/

// Parent class
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing shape with color ${this.color}`);
  }
}

// Child class
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Another child class
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Creating objects of child classes
const redCircle = new Circle("red", 5);
const blueRectangle = new Rectangle("blue", 10, 8);

// Testing the objects
redCircle.draw();
console.log(`Area of red circle: ${redCircle.calculateArea()}`);

blueRectangle.draw();
console.log(`Area of blue rectangle: ${blueRectangle.calculateArea()}`);

// Output:
// Drawing shape with color red
// Area of red circle: 78.53981633974483
// Drawing shape with color blue
// Area of blue rectangle: 80

/*
This complex code demonstrates object-oriented programming in JavaScript. It defines a parent class "Shape" and two child classes "Circle" and "Rectangle". The child classes inherit properties and methods from the parent class.

The "Circle" class has additional properties of "radius" and a method to calculate its area. The "Rectangle" class has additional properties of "width" and "height" and also has a method to calculate its area.

Multiple instances of the child classes are created and tested. The output shows the shape being drawn with its color and the calculated area for each shape.
*/