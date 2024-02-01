// ... is rest operators it prints all the value in console in the form of array

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 3978));


const user = {
    username: "Abhijeet",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "prince",
    price: 6755786987875e4
})


 const myNewaArray =[200, 300, 400, 500, 600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

//  console.log(returnSecondValue(myNewaArray));

console.log(returnSecondValue([200, 400, 500, 600]));
