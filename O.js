// Let's say we have a class that represents a shape
class Shape {
    area() {
      // default area calculation
    }
  }
  
  // Now we can create different shapes by extending the Shape class
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // We can now create different shapes without changing the Shape class
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(7);
  
  console.log(rectangle.area()); // output: 50
  console.log(circle.area()); // output: 153.93804002589985
  