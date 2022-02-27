/* Character Count drill */
const characterCount = function (str) {
    const returnValue = {}

    for (const currentCharacter of str.split("")) {
        if (!returnValue[currentCharacter]) {
            returnValue[currentCharacter] = 1
        } else {
            returnValue[currentCharacter]++
        }
    }
    /*
    for (let i = 0; i < str.length; i++) {
        const currentCharacter = str[i]
        if (!returnValue[currentCharacter]) {
            returnValue[currentCharacter] = 1
        } else {
            returnValue[currentCharacter]++
        }
    }
    */
    return returnValue
}


console.log(characterCount("spoon"))
