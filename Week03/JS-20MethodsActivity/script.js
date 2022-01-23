var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW


console.log(constellations);

//push() method adds to an array but only at the end of list
constellations.push("Canis Major");
console.log(constellations);

//unshift() method adds to an array at the start of the list
constellations.unshift("Canis Major");
console.log(constellations);

console.log(planets);
//pop() method removes item from end of list and it alerts you which item has been removed
//console.log(planets.pop());

//splice() method allows you to insert elements in array and to add/remove items too
planets.splice(5)
console.log(planets);

//concat() method allows you to join two arrays together
let galaxy = constellations.concat(planets);
console.log(galaxy)

//toUpperCase()method converts strings to uppercase letters without changing original string.
let starCapital = star.toUpperCase();
console.log(starCapital);

/* Revision Code */

var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

console.log(constellations);

function addingArrayElement() {
    constellations.unshift("Canis Major");
    return console.log (constellations);
};
addingArrayElement()


console.log(planets);

function removeArrayElement() {
    planets.splice(5,1);
    return console.log(planets);
};
removeArrayElement()


function concatenatedArrays(){
    const galaxy = constellations.concat(planets);
    return console.log(galaxy);
};
concatenatedArrays();

function uppercaseString(){
    const capitalStar = star.toUpperCase();
    return console.log(capitalStar);
}
uppercaseString()