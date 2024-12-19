// ******************* Object Literal ************************

const user = {
    username : "Radha Rani",
    loginCount : 12,
    email : "radha@gmail.com",
    signedIn : true,

    getUserDetails : function () {
        // console.log("Got User Details from the Database");
        // console.log(`Username : ${this.username}`);
        console.log(this); // current context
    }
}

console.log(user.username);
console.log(user.getUserDetails());

// ************** Constructor Function *****************

// const promiseOne = new Promise()
// const date = new Date() // new word is used for create new context

function User(username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,
    
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    // return this // define return or not because return define default
}

const userOne = new User("Radha", 12, true);
const userTwo = new User("Krishna", 2, false);
console.log(userOne.constructor);
// console.log(userTwo);

