// Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 25.3

const isLoggedIn = true
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

//const bigNumber = 531354684151545n


// Reference Type (Non-primitive)

// Array , Objects , Functions 

const heros = ["Radha","Krishna"] // Array
let myObj = {
    name : "Radha", // Object 
    age : 22
}

const myFunction = function(){
        console.log("Raadhe Raadhe"); // Function
        
}

console.log(typeof myFunction);


// ************* Stack Memory (Used in Primitive Types) gives a copy  *********************

let myName = "Yash"
let anotherName = myName
anotherName = "Radha Rani"

console.log(myName);
console.log(anotherName);


// ************ Heap Memory (Used in Non-Primitive Types) gives a original reference **********************

let userOne = {
    email : "yash@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Radha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

