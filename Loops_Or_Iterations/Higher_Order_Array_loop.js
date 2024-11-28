// ************ for of loop ***************
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// ********* Map ***********

const map = new Map() // map is always known for unique values
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('IN', 'India') // can't insert duplicate values 

// console.log(map);

for (const [key, values] of map) {
    // console.log(key, ':-', values);
}

const myObj = {
    'game1' : 'Mario',
    'game2' : 'PUBG',
    'game3' : 'FreeFire'
}

for (const key in myObj) {
//    console.log(`${key} is ${myObj[key]}`);  
}

const programming = ['php','java','.net','sql']
for (const key in programming) {
//   console.log(programming[key]);
}

const coding = ['js','ruby','c++']

coding.forEach( function (item) {
    // console.log(item); 
} )

// ********** Arrow Function ***********
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item , index , arr) => {
//     console.log(item, index, arr);
// } )

const mycoding = [
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName : 'Java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
})