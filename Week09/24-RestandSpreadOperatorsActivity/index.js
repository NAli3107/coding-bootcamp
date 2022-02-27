// Exercise 1
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

// TODO: Which operator is being used here?
const newSongs = [...songs];
// The spread operator.

// TODO: What do you expect to be logged in the console?
console.log(newSongs);
// I expect all of the array to be logged onto node/browser.

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0);
};
// The reduce() method reduces the array to a single value and executes a the 
// provided function which in this case is to add.

// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));
// I'd expect the sum to be 6

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};
// Rest operator

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));
// I expect the sum of 6

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
