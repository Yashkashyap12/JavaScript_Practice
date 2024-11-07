// singleton
//Object.create() // this is called constructor method or isi k andar singleton banta hai 

// object literals

const mySym = Symbol("key1")

const user = {
    name : "Radha",
    "full name" : "Radha Rani",
    [mySym] : "mykey1",
    age : 100,
    location : "Barsana",
    email : "radharani@gmail.com",
    isLoggedIn : true
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);

user.email = "radha@gmail.com"
Object.freeze(user)
user.email = "radhe@gmail.com"
console.log(user);


user.greeting = function(){
    console.log("Hello User");
}

console.log(user.greeting()); // Hello User
user.greetingOne = function(){
    console.log(`Hello Again, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greetingOne());
 console.log(user.greeting); // function anonymus 

