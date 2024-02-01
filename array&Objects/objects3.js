const tinderUser = new Object()  //singleton object

const tinderUser1 = {}  //non-singleton object

tinderUser.id ="13434abhi"
tinderUser.name ="Abhijeet"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(tinderUser1);

const regularUser = {
    email: "abhi@gmail.com",
    fullName: {
        userFullName: {
        firstName: "Abhijeet",
        lastName: "Verma"
    }
    }
}
//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}

//const obj3 =Object.assign(obj1 ,obj2)
//const obj3 = Object.assign({}, obj1,obj2) //if we don't  put the curly braces it shows obj1 === objc3 true  // curly braces makes false on strictly checking

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
//console.log(obj3 === obj1);



const users =[
    {
        id: 123,
        email: "abhijeet@gmail.com"
    },

    {
        id: 123,
        email: "abhijeet@gmail.com"
    },

    {
        id: 123,
        email: "abhijeet@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   //in entries it makes obj into array and gives keys and their value distinctly by forming nested array into it 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // it is used to find that the element we are finding is present or not
