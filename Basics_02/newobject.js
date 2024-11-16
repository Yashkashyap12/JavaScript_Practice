// object Singleton

 //const tinderUser = new Object() // this is singleton object 
 const tinderUser = {} // this is not a singleton object    

 tinderUser.id = "123abc"
 tinderUser.name = "Radha"
 tinderUser.isLoggedIn = true

console.log(tinderUser);
 
const regularUser = {
    email : "yash@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Radha",
            lastname : "Rani"
        }
    }
}

console.log(regularUser.fullname);  
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2) // for merging objects 
// const obj3 = {...obj1,...obj2} // simple spread or merge mostly using 
console.log(obj3);

const db = [
    {
        id : 1,
        email : "kanha@gmail.com"
    },
    {
        name : "kanha"
    }
]

db[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ********** de-Structure ***************
const course = {
    coursename : "JavaScript",
    courseprice : 999,
    courseteacher : "hitesh"
}

const {courseteacher : teacher} = course

console.log(teacher);
