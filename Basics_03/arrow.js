const user = {
    username : "Radha",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // this talk current values or current context
     }
}

// user.welcomeMessage()
// user.username = "Rani"
// user.welcomeMessage()

 // console.log(this); // output is empty object like this {} 

//  function chai (){
//     let username = "Yash"
//     console.log(this.username);
//  }
//  chai()

// const chai = function () {
//     let username = "Yash"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//         let username = "Yash"
//         console.log(this.username)
//     }
//     chai()

// const addTwo = (num1 , num2) => {   // Basic arrow function or we can say explicit return
//     return num1 + num2
// }
// const addTwo = (num1 , num2) => num1 + num2   // Implicit return    
// const addTwo = (num1 , num2) => (num1 + num2)  
const addTwo = (num1 , num2) => ({usernmae : "Yash"}) 

console.log(addTwo(5,9))