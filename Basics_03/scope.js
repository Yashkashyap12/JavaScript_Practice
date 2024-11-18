// var c = 300 // Global Scope
let a = 300
if(true){
    let a = 10
    const b = 20 // Block Scope 
    // console.log("Inner : ",a);
    
} // it is called scope 

//  console.log(a);
 
function one () {
    const username = "Yash"

    function two (){
        const website = "yash.com"
        console.log(username);
        
    }
    // console.log(website);

    two()   
}
// one()

if (true) {
    const username = "Yash Kashyap"
    if (username === "Yash Kashyap") {
        const website = " yash.com"
        // console.log(username + website);   
    }
    // console.log(website);
    
}
// console.log(username);

// ******************** Interesting *************************

console.log(addOne(5))
function addOne (num) {
    return num + 1   
}


console.log(addTwo(5))  // is called hoisting 
const addTwo = function (num){ // sometime we will say expression
    return num + 2
}