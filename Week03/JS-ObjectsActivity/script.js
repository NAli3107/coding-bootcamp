//WRITE YOUR CODE BELOW

const customerOrder = {
    drinkName:"coffee", 
    sugar: 2, 
    orderStatus: true,
    
};

console.log("Your order is " + customerOrder.drinkName + " with " + customerOrder.sugar + " sugars.")


if (customerOrder.orderStatus) {
    console.log("Ready for pick-up")
} else {
    console.log("Still in order queue")
}