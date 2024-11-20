// ********* IF **********

const isUserLoggedIn = true
const temprature = 41

if (temprature === 41) {
    console.log("less than 50");
}
else{
    console.log("Bhai tu thoda sa bkl hai kya");
}

const score = 200

if (score > 100) {
    const power = fly
    console.log(`User Power ${power}`);   
}
console.log(`User Power ${power}`);

// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2"); // Don't do this mistake this is not a good practice

// ********** Nested ***********

const balance = 1000
if (balance < 500) {
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("Yes you can buy this course");   
}

if (loggedInFromGoogle || loggedInFromEmail) { // || is used for multiple checking 
    console.log("User Logged In");
}