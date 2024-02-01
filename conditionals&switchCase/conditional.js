//  falsy values

// false,  0,  -0, BigInt , 0n, "" , null, undefined, NaN

const userEmail = []

if (userEmail) {
    console.log("got user email");
    
} else{
    console.log("Don't have user array");
}

//truthy values
// "0", 'false' , " ", [], {} , function(){}

// if we have to check empty array 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// if object is empty and we have to find it
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object has not any value it is empty");
    
}


//nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15



console.log(val1);


// ternary operator

// condition ? true : false

const icePrice = 100
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80");


const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`user power : ${power}`);
    
}
// console.log(`user power: ${power}`);  // this gives error
//scope k ander jo declare ho gya wo andar hi rhta h bahar nhi aata hai