// const coding = ["javascript", "python","java","cpp","ruby"]


// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum =myNums.filter( (num) => num >4)
// console.log(newNum);


const newNum =myNums.filter( (num) => {
    return num > 4
})
// console.log(newNum);


// const newNums = []

// myNums.forEach( (num)  => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1991,
    edition: 2004 },
    {title: 'Book Two', genre: 'History', publish: 1991,
    edition: 2004 },
    {title: 'Book Three', genre: 'philosphy', publish: 1991,
    edition: 2004 },
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1991,
    edition: 2004 },
    {title: 'Book Five', genre: 'science', publish: 1991,
    edition: 2004 },
    {title: 'Book Six', genre: 'civics', publish: 1991,
    edition: 2004 },
    {title: 'Book Seven', genre: 'Fiction', publish: 1991,
    edition: 2004 },
    {title: 'Book Eight', genre: 'Fiction', publish: 1991,
    edition: 2004 }
    
];

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')

userBooks = books.filter(  (bk)  =>  { return bk.publish >= 1975} )

console.log(userBooks);

