// Write Your Code Below

function equality(value1, value2){
    if (value1 ===  value2) {
        console.log("They are equal in type and value");
    } else if (value1 == value2) {
        console.log("They are equal in value")        
    } else { (value1 !== value2)
    console.log("The values are not equal");
    }
    return;
}

equality(4, 4);

equality(4, "4");

equality(3, 4);

