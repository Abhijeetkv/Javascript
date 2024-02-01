//singleton is created by object.create

//object literals

const mySym = Symbol("key1")

const jsUser ={
    name: "abhijeet",
    "full name": "Abhijeet verma",
    [mySym] :"mykey1",
    age: 18,
    location: "Bihar",
    email: "abhijeetkv2@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","sunday", "tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "abhijeetchatgpt@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "abhij@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

