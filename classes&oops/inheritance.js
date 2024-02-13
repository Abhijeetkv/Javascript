class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAAME Is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email =email
        this.password = password
        
    }

    addCoruse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const abhi =new Teacher("abhi", "abhijeetkv2@gmail.com", "8230")

abhi.addCoruse()

const vishu = new User("vishwa")

vishu.logMe()

console.log(vishu instanceof User);
