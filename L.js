class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

function calculateArea(rectangle) {
  return rectangle.area();
}

const rectangle = new Rectangle(3, 4);
const square = new Square(5);

console.log(calculateArea(rectangle)); // Output: 12
console.log(calculateArea(square)); // Output: 25
