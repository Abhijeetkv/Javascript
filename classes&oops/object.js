function multiplyBy6(num){
    return  num*6

}

multiplyBy6.power = 2

console.log(multiplyBy6(7));
console.log(multiplyBy6.power);
console.log(multiplyBy6.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe =function(){
    console.log(`age is ${this.score}`);
}

const name =new createUser("Abhi", 18)
const name1 =new createUser("vishu",20)

name.printMe()
