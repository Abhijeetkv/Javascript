//  immediately invoked function expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//GLOBAL SCOPE K POLLUTION SE PROBLEM HOTI HAI KAI BAR TO US GLOBAL VARIABLE KO HATANE K LIYE IIFE USE KIYA

// do fe agar ek sath likhe to semicolon lagana pdta h at the end of 1st function

(  (name) => {
    // unnamed fe
    console.log(`DB CONNECTED TWO  ${name}`);
})  ("Abhijeet");