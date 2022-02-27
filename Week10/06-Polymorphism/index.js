// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      if (inRange(input, 90, 100))
      return "A";
      if (inRange(input, 80, 90))
      return "B";
      if (inRange(input, 70, 80))
      return "C";
      if (inRange(input, 60, 70))
      return "D";
      if (inRange(input, 0, 60))
      return "F";
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      if(input === "A")
      return "90-100";
      if(input === "B")
      return "80-90";
      if(input === "C")
      return "70-80";
      if(input === "D")
      return "60-70";
      return "0-60"
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
