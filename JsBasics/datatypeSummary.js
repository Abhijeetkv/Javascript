//primitive

// 7 types : string, number, boolean, null, undefined, Symbol, BigInt




//reference (non-primitive)

//Arrays, Objects, Functions



//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);

const bigNumber = 72764555825725725679266259n



//reference (non primitive)
//Array, objects, functions

const heroes =["shaktiman", "naagraj", "doga"];


let myObj = {
    name: "abhijeet",
    age: 18,

}


const myFunction = function(){
    console.log("hello world");
}