const userEmail = []

if (userEmail) {
    console.log("Got the user Email");
}else{
    console.log("Don't have user Email");
}

// ************** Falsy Values *****************

// NaN ,BigInt , 0 , -0 , 0n , "" , null , undefined , false

// ************* Truthy Values *****************

// "0" , [] , 'false' , " " , function(){} 

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nulish Coalescing Operator (??) : null or undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 15
val1 = undefined ?? 20
val1 = null ?? 10 ?? 20

// console.log(val1);


// ***** Ternary Operator *****

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;
