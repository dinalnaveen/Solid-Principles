class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(num) {
      this.result += num;
    }
  
    subtract(num) {
      this.result -= num;
    }
  
    multiply(num) {
      this.result *= num;
    }
  
    divide(num) {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      this.result /= num;
    }
  }
  
  class Display {
    showResult(result) {
      console.log(`The result is: ${result}`);
    }
  }
  
  const calculator = new Calculator();
  const display = new Display();
  
  calculator.add(10);
  calculator.subtract(5);
  calculator.multiply(2);
  calculator.divide(4);
  
  display.showResult(calculator.result);
  