// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password =password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const abhi = new User("abhi", "abhijeetkv2@gmail.com", "990")

// console.log(abhi.encryptPassword());
// console.log(abhi.changeUserName());



// behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password =password;
}

User.prototype.encryptPassword = function(){
return `${this.password}abc`

}

User.prototype.changeUserName = function(){
return `${this.username.toUpperCase()}`

}

const vishu = new User("vishu", "abhijeetkv2@gmail.com", "990")

console.log(vishu.encryptPassword());
console.log(vishu.changeUserName());