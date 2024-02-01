const myArr =[8, 1, 2, 3, 4, 5, 6, 0]
// const myHeroes = ["saktiman", "abhijeet", "doga", "Hanuman"]

// console.log(myHeroes);
// console.log(myArr);

//  myArr.push(10)// it is used to push more values in arrays
//  myArr.push(11)
//  myArr.pop()  //it removes the last value

// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(7));   // it gives the boolean values by checking which element is present or not
console.log(myArr.indexOf(0));   // it gives the value which is present in array at which no. position

// const newArr =myArr.join()  // it changes the datatype object to string

// console.log(newArr);
console.log(myArr);
// console.log(typeof myArr);
// console.log(typeof newArr);


// slice  /  splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("C", myArr);



// in splice original value manipulates and in slice original value doesnot manipulate

