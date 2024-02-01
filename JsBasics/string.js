const name = "Abhijeet"
const repoCount = 50

// console.log( name +  repoCount +" value");
// this is not preferable now

console.log(`My Name Is ${name} and My RepoCount is ${repoCount}`);
// `back quote is below the esc tab`

const gameName = new String ('abhi-akv-vishu')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);               // .length is used to find the total no. of character
// console.log(gameName.toUpperCase());        //.toUpperCase is used make the no. uppercase
console.log(gameName.charAt(2));           // .charAt() is used to find the at which position which character lies
console.log(gameName.indexOf('k'));        // .indexOf is used to find the no. at which that character is present

const newString = gameName.substring (0 , 4)  // 4th character is not included
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "   abhijeet  "
console.log(newStringOne);
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());
console.log(newStringOne.trim());  // trim is used to remove white spaces if you want to remove white spaces from leftside use "trimstart" and from rightside use "trimend"


const url = "https://abhijeetakv.com/abhijeet%20verma"

console.log(url.replace('%20', '-')); // it is used to replace the text 

console.log(url.includes('abhijeet'));  // it is used to check which keyword is available or not in this url

console.log(url.includes('ayush')); //this keyword is not availabe in url so it gives false value

console.log(gameName.split('-'));