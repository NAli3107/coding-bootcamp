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
    console.log(studentNames[0] + " is in class")
} 