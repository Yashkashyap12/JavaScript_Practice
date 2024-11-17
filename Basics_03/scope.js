// var c = 300 // Global Scope
let a = 300
if(true){
    let a = 10
    const b = 20 // Block Scope 
    console.log("Inner : ",a);
    
} // it is called scope 

 console.log(a);
 