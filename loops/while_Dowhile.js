
let i = 0;
while (i <= 10) {
    console.log(`value of index is ${i}`);
    i += 3;
}


let myArray = ["i", "am" , "everywhere", "cuz" , "i", "am", "batman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr += 1
}


//it runs before checking the condition
let score = 10
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);