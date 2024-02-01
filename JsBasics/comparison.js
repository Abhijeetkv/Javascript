console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
the reason is that an equility check == and comparisions > < >= <= work differently
comparisions convert null to a number, treating it as 0.
that's why (3) null >= 0 is true and (1) null > o is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === - strictly check- it's checks datatype also

console.log("1" === 1);


//avoid these types of codes make sure your code is clean

