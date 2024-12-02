const mynums = [1,2,3]
// const mytotal = mynums.reduce( (accumulator,currentvalue) => { console.log(`accum : ${accumulator} and currentval:${currentvalue}`);
//  return accumulator + currentvalue},0) // reduce is basically using for shopping cart 
// console.log(mytotal);

const shoppingCart = [
    {
        itemName : 'js course',
        price : 299
    },
    {
        itemName : 'android course',
        price : 399
    },
    {
        itemName : 'datascience course',
        price : 499
    },
]

const pricetopay = shoppingCart.reduce( (acc , item) => acc + item.price  , 0 )
console.log(pricetopay);
