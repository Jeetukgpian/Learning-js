//Learning dates
let currDate=new Date()
console.log(currDate)

//methods on date
console.log(currDate.getDate())
//months are 0-based indexed
console.log(currDate.getMonth())
console.log(currDate.getFullYear())
console.log(currDate.getTime())
console.log(currDate.toLocaleDateString())
console.log(currDate.toLocaleString())
console.log(currDate.getTime())

//Js create date in format of yy-mm-dd
let createDate=new Date("06,01,2005") //MM/DD/YY
console.log(createDate)
let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate2 = new Date("2023-01-14")

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


//we can modify the default behaviour of converted locale string
let newDate= new Date()
newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate)