// **************** Immediately Invoked Function Expression *******************

// function chai(){
//     console.log(`DB CONNECTED`); 
// }
// chai()



// named iife
(function chai(){
    console.log(`DB CONNECTED`);  // Using IIFE for global scope pollution
})();    // ; is must for end line

// unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // we can using also arrow function
    
} ) ("Radha")