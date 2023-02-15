// Base class
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  // Derived class
  class Square extends Rectangle {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
  
    setWidth(width) {
      this.width = width;
      this.height = width;
    }
  
    setHeight(height) {
      this.width = height;
      this.height = height;
    }
  }
  
  // Client code
  function printArea(rectangle) {
    console.log(rectangle.getArea());
  }
  
  const rectangle = new Rectangle(3, 4);
  const square = new Square(5);
  
  printArea(rectangle); // Output: 12
  printArea(square);    // Output: 25
  
  square.setWidth(10);
  printArea(square);    // Output: 100
  