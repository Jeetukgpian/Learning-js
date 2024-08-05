//singleton => when object is defined by a constructor then it formed as a singleton
//How to create object
//1. As a constructor => object.create()
//1. As a object literals
let jsUser={} //object (empty)

//if you want to include a symbol in object
let mySymbol=Symbol("key1")

let myProfile={
    //key:value 
    Name:"Jitendra Bhati",
    "College":"IIT KGP",
    // mySymbol:"key2",
    [mySymbol]:"key2",//correct way to use symbol
    rollNo:"22BT10013",
    phone:7906204112,
    Dep: "Biotechnology"
} // data is put in form of key value pairs

//How to access the key values
console.log(myProfile.phone)
console.log(myProfile["phone"])
console.log(myProfile["College"]) //only way to access this kind of key
//how to access symbol
/*console.log(myProfile["mySymbol"]) 
-by this you get the value of mySymbol in the object not the initialised value*/
console.log(myProfile[mySymbol]) //only way to access

//How to modify values
myProfile.Name="Jeetu Bhati"
// Object.freeze(myProfile)
// myProfile.Name="Jackson" //will not get modified as object is alrady freezed
// console.log(myProfile["Name"]);
// console.log(myProfile)

//How to use function as keys in object

myProfile.greeting=function(){
    console.log("Good Morning Jitendra Bhati")
}

myProfile.greeting2=function(){
    console.log(`Good Morning ${this.Name}`)
}

console.log(myProfile.greeting()) //access it as a method
console.log(myProfile.greeting2()) //used string interpolation and this method to get access of object key


