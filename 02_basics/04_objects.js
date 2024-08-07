//Other ways to create an object
// let newObj=new Object();
let obj1={}

//assign key:value pairs from outside
obj1.name="Jitendra"
obj1.rollNo="22BT10013"
obj1.section=8
obj1.college="IIT KGP"

console.log(obj1)

//we can create nested objects
let myObject={
    newObject:{
        otherObject:{
            name:"Jeetu Bhai",
            RollNo:19
        }
    }
}

//how to access these values
console.log(myObject.newObject.otherObject.name)
//to access keys of an object
console.log(Object.keys(myObject))
//to access values of an object
console.log(Object.values(myObject))
console.log(Object.entries(myObject)) //make every key:value pair an array

let obj2={1:'a',2:'b'}
let obj3={3:'c',4:'d'}
let obj4={obj2,obj3}
let obj5={...obj1,...obj2}
let obj6=Object.assign({},obj1,obj2)

console.log(obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email) 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


//->Object destructuring

// course.courseInstructor
//other way to assign new variable to a given variable/key courseInstructor is replaced by instructor 
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//JSON = Javascript object notation
//Json file { string:string }
//We got api's in the given two formats
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]