// function addTwoNumbers (number_1 , number_2) { // (number_1 , number_2 is called parameters)
//     console.log(number_1 + number_2);
    
// }

function addTwoNumbers (number_1 , number_2) { // (number_1 , number_2 is called parameters)
    // let result = number_1 + number_2  // First way to declare
    // return result
    return number_1 + number_2 // second way to declare
    
}
const result = addTwoNumbers(4,9) // (4,9 is called arguments) 

console.log("Result :", result);

function loginUser (usrename){
    if(!usrename) { // (username === undefined) is first way to declare || (!username) is second way to declare
        console.log("please enter your username");
        return
    }
    else{

        return`${usrename} just logged in`
    }
}

console.log(loginUser("Yash")) 
console.log(loginUser()) // Output is undefined
