const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

// we can iterate object by forin loop
//it doesnot iterate in forof loop
for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}


const lang = ["javascript", "python","java","cpp","ruby"]

for (const key in lang) {
    console.log(lang[key]);
}