// ************** First way to declare promise ****************

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async Task is Completed');
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log('Promise Consumed');
})

// ************** Second way to declare promise ****************

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task Two is Completed');
        resolve();
    },1000)
})
.then(() => {
    console.log('Async task is resolved');
})

// **************** PromiseTwo ******************

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username:"Radha Rani",email:"radharani@gmail.com"})
    },1000)
})

promiseTwo
.then(function (user) {
    console.log(user);
})

// **************** PromiseThree ******************

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"Krishna",password:123})
        }else{
            reject('ERROR : Something went Wrong!');
        }
    })
},1000)

promiseThree
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));


// **************** PromiseFour ******************

const PromiseFour = new Promise((resolve,reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"Yash",password:123})
        }else{
            reject('ERROR : Oops! went Wrong');
        }
    })
},1000)

async function consumePromiseFour() {
    try {
        const response = await PromiseFour
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);  
})
.catch((error) => console.log(error))