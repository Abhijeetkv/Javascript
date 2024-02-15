class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `2342`
    }

}

const abhi = new User ("abhijeet")
// console.log(abhi.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }

}

const iphone = new Teacher ("iphone", "iphone@gmail.com")
// console.log(iphone.createId());
iphone.logMe()