// function addTwoNumbers (number_1 , number_2) { // (number_1 , number_2 is called parameters)
//     console.log(number_1 + number_2);
    
// }

function addTwoNumbers (number_1 , number_2) { // (number_1 , number_2 is called parameters)
    // let result = number_1 + number_2  // First way to declare
    // return result
    return number_1 + number_2 // second way to declare
    
}
const result = addTwoNumbers(4,9) // (4,9 is called arguments) 

// console.log("Result :", result);

function loginUser (usrename){
    if(!usrename) { // (username === undefined) is first way to declare || (!username) is second way to declare
        console.log("please enter your username");
        return
    }
    else{

        return`${usrename} just logged in`
    }
}

// console.log(loginUser("Yash")) 
// console.log(loginUser()) // Output is undefined


function calculateCartPrice (val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,600,500,800))

const user = {
    username : "Radhe Radhe", // First way to declare object 
    prices : 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "Radha", // Second way to declare object
    price : 233
})

const myNewArray = [200,400,600]

function returnSecondValue (getNewArray){
    return getNewArray[2]
}

// console.log(returnSecondValue(myNewArray)); // first way to declare 
console.log(returnSecondValue([200,400,600])); // second way to declare 

