// ********** Dates *************

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate); // output : object

// ******** Declare Date ****************

let myCreatedDate = new Date(2022,0,22) // in javaScript month start from 0
let myCreatedDate = new Date(2022,0,22 , 18 , 7) // declare date and time also
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long"
})

