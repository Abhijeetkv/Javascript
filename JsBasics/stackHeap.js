// stack memory used in primitive datatypes

// heap memory used in non-primitive datatypes


let myYoutubename= "coderxabhijeet"

let anotherName = myYoutubename
anotherName ="Abhijeet verma"

console.log(myYoutubename);
console.log(anotherName);

// in this not original value not change it makes a copy of it in stack memory


//this goes in heap

let userOne = {
    email: "abhijeetkv2@gmail.com",
    upi : "abhi@ybl"
}

let userTwo = userOne

userTwo.email = "abhijeetaryan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//in this original value changes to the next value assign bcoz it doesnot make copy of it, it is saved in heap memory