// object :- collection of properties and functions 

const user ={
    userName : "Abhijeet", 
    loginCount : "3",
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user Details From database");
        console.log(`userName: ${this.userName}`);
        console.log(this);  // this gives you the value of current context
    }
}
// this is basically object literals

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);



// new is a constructer function, it allows us to make multiple instances from one object
// constructor function gives you new copy or instances of objects
function User(username, loginCount, isLoggedIn){
    this.userName = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this

}

const userOne =new User("Abhijeet", 12, true)
const userTwo =new User("abhi", 11, false)
console.log(userOne);
console.log(userTwo);