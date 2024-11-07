const Gods = ["Radha", "Kanha"]
const Hero = ["manu","Aman"]

Gods.push(Hero) // push
const allGod = Gods.concat(Hero) // concat gives new array

console.log(allGod)
console.log(Gods[0][3]);

const all_god = [...Gods,...Hero] // spread function working like this 
console.log(all_god);

const another_Arr = [1,2,3,[8,6,7,3],[3,7,2],[3,8]]
const real_another_arr = another_Arr.flat(Infinity) // flat using for merge array
console.log(real_another_arr); 

console.log(Array.isArray('Radha'));
console.log(Array.from('Radha')); // convert into array form
console.log(Array.from({name : "Radha"})); // Interesting


let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));



