const myArr = ["Abhi", "vishu", "ironman"]
const dcHeros =["batman", "superman"]

// myArr.push(dcHeros)  //if we push one array into another it takes the array as an element

// console.log(myArr);
// console.log(myArr[3][1]);

const allHeros = myArr.concat(dcHeros)  // it adds both the array in single array
console.log(allHeros);

// const allNewHeros = [...myArr, ...dcHeros]  // it is preferable over concat bcoz if there is more than two arrays and we have to merge them then we use it it make all element distinct
// console.log(allNewHeros);

const anotherArr =[1, 2, 3, [4, 5, 6], 7, [6,7, [4,6]]]

const reAnoArray = anotherArr.flat(Infinity)  // it is used to combine nested array in a single array
console.log(reAnoArray);


console.log(Array.isArray("Abhijeet"));
console.log(Array.from("Abhijeet"));
console.log(Array.from({name: "Abhijeet"})); //it gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


