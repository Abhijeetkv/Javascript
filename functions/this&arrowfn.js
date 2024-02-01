const user ={
    username: "Abhijeet",
    price: 999,

        welcomeMessage: function()  {
            console.log(`${this.username}, welcome to my website`);
            // console.log(this);
        }
}
// this. reffers to the current context in the braces

// user.welcomeMessage()
// user.username = "Vishwajeet"
// user.welcomeMessage()


// console.log(this);  // it gives empty object
// in browser global object is window



// function chai(){
//     let username = "Abhijeet"   // this context is only used in objects
//     console.log(this.username);
// }

// chai()




// const chai =function ()  {
//     let username = "abhijeet"
//     console.log(this.username);

// }

// chai()



//  => this is called arrow fn it declare after the smnall braces
const chai = () => {
    let username = "abhijeet"
    console.log(this);

}

// chai()


// const addTwo =(n1, n2)  => {
//     return n1 + n2
// }

//  console.log(addTwo(3,4))


//implicit function - in it we don't use {} paranthises
// if we use curly parathises then we have to give RETURN keyword and in implicit fn we don't use return
const addTwo = (n1 , n2)  => n1 + n2

console.log(addTwo(4,7));