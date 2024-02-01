const accountId =12344
let accountEmail= "abhijeetkv2@gmail.com"
var accountPassword = "12334"
accountCity ="jaipur"
let accountState;

// accountId = 2  - NOT allowed in const we cannot change value by declaring another variable

accountEmail = "abhij@gmail.com"
accountPassword = "5465757"
accountCity = "vadodra"

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/*
prefer not to use var 
bcoz of issue in block scope and global scope
*/