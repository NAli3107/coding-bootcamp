// This logs an array with two arguments: the pathway to your node and the pathway to your file.
console.log(process.argv)

// You can access the particular argument you want by using its index in the array.
console.log(process.argv[2]) // in the terminal it will give me 'naruto'
console.log(process.argv[3]) // in the terminal it will give me 'sasuke'

// Holding these arguments in variables
const argument1 = process.argv[2];
const argument2= process.argv[3];

// comparing to see of the values of argument 1 and 2 are the same or not when changed in the terminal.
// this method will also return true when both args are undefined
if (argument1 === argument2) {
    console.log('true')
} else {
    console.log('false')
}

//therefore this is better
if (argument1 && argument2 && argument1 === argument2) {
    console.log('true')
} else {
    console.log('false')
}