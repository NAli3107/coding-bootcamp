/*
Ex:
Input: '1'
Output: -1

Input: '4'
Output: -4

Input: 'cow'
Error
*/

// const changingStrings = (string) =>{
//     const number = parseInt(string)
//     if (number < 0) {
//         return number
//     } else {
//         return - Maths.abs(number)
//     }
// }


// const negator = input => {
//     if (isNaN(input)) {
//         throw Error('Not a number')
//     }
//     if (typeof input === 'number') {
//       return -Math.abs(input)
//     }
//     return negator(parseFloat(input))
// }

// console.log(negator("12"))

/* Coding Drill 3
Ex:
Input: [1,2,3]  1
Output: true

Input: [1,2,3]  4
Output: false

Input: ['code', 'dev', 'nerd']  'nerd'
Output: true

Input: ['code', 'dev', 'nerd']  'genius'
Output: false */

function inArray(array, value) {
    for(let i = 0; i < array.length; i++){
        
        if(array[i] === value){
            return true;
        }
    }   return false
}

console.log(inArray([1,2,3], 1))

console.log(inArray([1,2,3], 4))

console.log(inArray(['code', 'dev', 'nerd'], 'nerd'))

console.log(inArray(['code', 'dev', 'nerd'], 'genius'))