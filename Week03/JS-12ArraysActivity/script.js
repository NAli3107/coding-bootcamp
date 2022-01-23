// WRITE YOUR CODE HERE
const studentName = ["bob", "bill", "kate", "sara"]
console.log(studentName)

console.log("welcome to the class" , studentName[3])

function welcomeStudent() {
    for (let i=0; i<studentName.length; i++){
        console.log("welcome to the class", studentName[i])
    }
}

welcomeStudent()

let studentNames = ['sumaya', 'fatumo','humma','farhah']
console.log(studentNames.length)

console.log("Welcome to the class" +" " + studentNames[0])
console.log("Welcome to the class" +" " + studentNames[1])
console.log("Welcome to the class" +" " + studentNames[2])
console.log("Welcome to the class" +" " + studentNames[3])

studentNames[0] = "Girish"
console.log("Welcome to the class" +" " + studentNames[0])

if (studentNames[0] !== "Sumaya"){
    console.log(studentNames[3] + " is in class")
} 

/*Revision Code */
let students = ["Nadira", "Humma", "Farhah", "Fatumo", "Sumaya"];
console.log(students.length)

console.log("Welcome to the class " + students[0] + ".");
console.log("Welcome to the class " + students[1] + ".");
console.log("Welcome to the class " + students[2] + ".");
console.log("Welcome to the class " + students[3] + ".");
console.log("Welcome to the class " + students[4] + ".");

students[0] = "Jean";
console.log(students);

if(students[0] !== "Nadira") {
    console.log("Jean is in class.");
};

// let index = students.indexOf("Nadira");
// if(index !== -1){
//     students[index] = "Jean";
// }

// console.log(students[0])