//for of

// ["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello abhijeet"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//Maps
//it only takes unique values

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America" )
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
//maps are iterable to iterate objects there is another method

const myObject ={
    game1: 'NFS',
    game2: 'spiderman'
}

// for (const [key, value] of object) {
//     console.log(key, ':-', value);
// }  // this method doesnot work for object



//forin loop

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America" )
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
//we cannot iterate map by forin loop