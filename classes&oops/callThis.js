function setUserName(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username)
    
    this.email =email
    this.password = password
}


const abhi = new createUser("Abhi", "abhijeetkv2@gmail.com", "983")

console.log(abhi);