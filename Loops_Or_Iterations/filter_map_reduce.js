// const coding = ['js','c++','python','java','c#']

// const values = coding.forEach( (item) => {  // foreach can't return any value
//     console.log(item);
//     return item
// } )

// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

//     const newNums = myNums.filter( (num) => { // First Way
//     return num > 5
// })

// const newNums = []

// myNums.forEach( () => { // Second Way
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// const books = [
//     {title:'Book One',genre:'fiction',publish:1981,edition:2004},
//     {title:'Book two',genre:'physics',publish:1971,edition:2005},
//     {title:'Book Three',genre:'Chemistry',publish:1921,edition:2006},
//     {title:'Book four',genre:'c++',publish:1991,edition:2007},
//     {title:'Book four',genre:'physics',publish:1991,edition:2007},
// ]

// let userBook = books.filter( (bk) => bk.genre === 'physics' )
// userBook = books.filter( (bk) => { return bk.publish >= 1921} )
// console.log(userBook);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const num = myNums.map( (num) => num + 10 )
const num = myNums.map( (num) => num * 10 ).map( (num) => num + 1 ).filter( (num) => num >= 40 ) // it is called chaining 
console.log(num);
