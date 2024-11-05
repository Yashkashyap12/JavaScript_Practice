// console.log("2" > 1);
// console.log("02" > 1);


// ******************* In JavaScript Comparison or Equality Check they both are different from each other ******************************
// Avoid these types of conversions 
console.log(null > 0); // output : false 
console.log(null == 0); // output : false
console.log(null >= 0); // output : true  // null converted into "0"

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ************** Strict check === **********************

console.log("2" == 2); // output : true
console.log("2" === 2); // output : false
