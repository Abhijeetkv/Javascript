let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toISOString());
// console.log(typeof myDate);


// let myCreateDate = new Date(2023, 11 , 16)
// let myCreateDate = new Date(2023, 11 , 16, 5, 3)

//let myCreateDate = new Date("2023-01-16")

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {

    // you can check the properties by clicking ctrl + space
    weekday:"long"
})