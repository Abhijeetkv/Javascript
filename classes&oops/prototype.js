// let myName = "Abhijeet      "
// let myChannel = "Abhijeet verma     "
// console.log(myName.truelength());

let myHeros = ["Hanuman", "shreeRam"]

let  heroShastra ={
    Hanuman: "gada",
    shreeRam:"dhanus",

    getSpiderPower: function(){
        console.log(`Hanuman Shastra is ${this.Hanuman}`);
    }
}

Object.prototype.Abhijeet = function(){
    console.log(`Abhijeet is present in all objects`);
}

Array.prototype.heyAbhijeet = function(){
    console.log(`Abhijeet says hello`);
}

// heroShastra.Abhijeet()
myHeros.Abhijeet()
myHeros.heyAbhijeet()
// heroShastra.heyAbhijeet()


// inheritance

const user ={
    name: "Abhijeet",
    email:"abhijeetkv2@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "Abhijeet verma     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUser.truelength()
"vishu".truelength()
"abhi".truelength()