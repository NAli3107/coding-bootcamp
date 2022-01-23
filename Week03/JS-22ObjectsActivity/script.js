// //WRITE YOUR CODE BELOW

// const customerOrder = {
//     drinkName:"coffee", 
//     sugar: 2, 
//     orderReady: true,
    
// };

// console.log("Your order is " + customerOrder.drinkName + " with " + customerOrder.sugar + " sugars.")


// if (customerOrder.orderReady) {
//     console.log("Ready for pick-up")
// } else {
//     console.log("Still in order queue")
// }

/* Revision Code */

let customerOrder = {
    drinkName: "coffee",
    numberOfSugars: 2,
    isReady: false,
};

console.log(customerOrder.drinkName);
console.log(customerOrder["numberOfSugars"]);


function drinkOrder() {
    if(customerOrder.isReady){
        console.log("Ready for pick-up.");
    } else {
        console.log("Still in order queue.");
    }
    return;
}

drinkOrder()