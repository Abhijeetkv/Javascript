function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
    
    }
    
    // sayMyName()
    
    //(num1, num2) here after function is called parameters
    // function addTwoNumbers(num1, num2){  
    //     console.log(num1 + num2);
    // }
    
    function addTwoNumbers(num1, num2){  
        //   let result = num1+ num2;
        //   console.log("Abhijeet");
        //   return result
        //   console.log("Abhijeet");  // this will not be executed bcoz it is written after return
    
        return num1 + num2
        }
    
    const result = addTwoNumbers(3, 4)  //this is called arguments
    
    //console.log("Result:", result);
    
    
    function loginUserMessage(username){
        return `${username} just logged in`
    }
    
    // console.log(loginUserMessage("Abhijeet"))
    console.log(loginUserMessage())   // if you donot define anything then it gives undfined value as username