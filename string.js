const name = "Radha"
const repoCount = 1000

// console.log(name + repoCount); // not a good practice

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); //GOOD PRACTICE FOR PRODUCTION

// another type to create string 

const gameName = new String ('Radha-Rani-Banke-Biahri')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newOne = "    YASH    "
console.log(newOne);
console.log(newOne.trim()); // remove before and after space

const url = "https://yash.com/yash%20kashyap"
console.log(url);

console.log(url.replace('%20','/'));
console.log(url.includes('raha'));
console.log(gameName.split('-'));






