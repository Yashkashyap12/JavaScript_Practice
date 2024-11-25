// ************* For Loops *****************

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop Value : ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner Loop Value : ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i * j);  // for table printing 
    }
}

let myArr = ["Radha","Kanha","Shyama"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// ****** Break and Continue *******

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value is ${i}`);
}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value is ${i}`);
}