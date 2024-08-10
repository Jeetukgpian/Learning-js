//for...in loop for iterating objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

// for...in loop to iterate over the keys of an object
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

// for...in loop to iterate over the indices of an array (not the elements)
for (const key in programming) {
    // console.log(programming[key]);
}

// Maps

//Creating a new Map object
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

// for...in loop on a Map object will not work as expected
// for (const key in map) {
//     console.log(key);
// } -> not work 


//Summary
// for/while/do-while :- array,strings, map,objects
//for...of :- array,strings,maps -> access direct values
//for...in :- array,string,objects -> access keys/indexes
