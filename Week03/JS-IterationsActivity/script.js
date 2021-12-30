//WRITE YOUR CODE BELOW

//List of 5 classmates
let classMates = ["sumaya", "fatumo", "humma", "farhah", "jean"];
console.log(classMates)

//Log total number of items in the array
console.log(classMates.length)

//for loop to greet classmates

for (let i=0; i<classMates.length; i++){
    let students = classMates[i];
    console.log("Great to see you, "+ classMates[i],"!");
}

let i = 0

while(i < classMates.length){
    let students = classMates[i]
    console.log("Great to see you, "+ classMates[i],'!')
    i = i + 1;
}