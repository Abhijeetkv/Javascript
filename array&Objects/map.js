const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

// when we declare in scope we have to return the value by giving return
// const newNum = myNums.map( (num) => num + 10)


const newNums = myNums
                    .map( (num)  => num * 10)
                    .map(  (num)  => num + 1)
                    .filter( (num) => num >= 40)


console.log(newNums);