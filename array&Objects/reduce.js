// it is used in shopping cards
//in reduce it has accumulater and currentvalue in parameter
//after scope we use , and initiate value of accumulator

const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function  (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = myNums.reduce( (acc, curr)  => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "ps course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);