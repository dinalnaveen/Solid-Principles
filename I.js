// Define the interface for a printable object
class Printable {
    print() {}
  }
  
  // Define a class that implements the Printable interface
  class Document {
    constructor(title, text) {
      this.title = title;
      this.text = text;
    }
  
    print() {
      console.log(`${this.title}: ${this.text}`);
    }
  }
  
  // Define a function that takes a Printable object and prints it
  function printObject(obj) {
    obj.print();
  }
  
  // Create a new Document object and print it
  const document = new Document('My Document', 'This is the text of my document.');
  printObject(document);
  