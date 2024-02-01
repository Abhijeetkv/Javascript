//var c = 300

// {} comes with function/if,else then it is called as scopes

let a = 400

// whatever we have written in if condition is known as blockscope

// outside if conditon we make a globlal scope
if(true){
    let a =10
    const b = 20
    console.log("INNER: ", a);

}


// console.log(a);
// console.log(b);


function one(){
    const username = "Abhijeet"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //  console.log(website);

     two()

}

// one()



if (true) {
    const username = "Abhijeet"
    if (username === "Abhijeet") {
        const website = " youtube "
        console.log(username + website);
        
    }

    // console.log(website);  // it gives error
}

// console.log(username);   // it gives error


//  ++++++++++++++++++++++  interesting  +++++++++++++++++++

//  addone(5)  //in this syntax we can host our fn
function addone(num){
    return num + 1
}

addone(5)

// addTwo(5)  // in this syntax of fn we cannot host it before declaring the fn
const addTwo = function(num){
    return num + 2
}

addTwo(5)