let score = "25abcd" // null value 0 // undefined gives NaN // true gives 1/ false gives 0
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// NaN stands for Not A Number

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true , 0 => false
// "" => false
// "radha" => true

let someNumber = 45

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

// ********************* Operations *********************

let value = 3
let negValue = -value
console.log(negValue);


// ******************* Not a Good Practice *******************

console.log("1"+2) // output : 12
console.log(1+"2") // output : 12
console.log("1"+2+2) // output : 122
console.log(1+2+"2") // output : 32

console.log(+true)
console.log(+"");

// ************************ Prefix increment **********************
// let gameCounter = 100
// ++gameCounter;

// console.log(gameCounter);

// ************************ Postfix increment **********************

let gameCounter = 100
gameCounter++;

console.log(gameCounter);