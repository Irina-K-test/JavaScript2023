//===== switch =====
// let num = 11;
// switch (num) {
//     case 1:
//         console.log("One");
//     case 2:
//         console.log("Two");
//     case 3:
//         console.log("Three");
//     case 4:
//         console.log("Four");
// break;
// }
// console.log("Hi")

// ====== STRING, Lengh =======

// let phrase = "Hello world!"; //1-12
// let space = ' .%'

// console.log(phrase.length);
//console.log(space.length);

// index

//console.log(phrase[11]);
//console.log(space[0]);

// string.toLowerCase();
//console.log(phrase.toLowerCase());
//console.log(phrase.toUpperCase());

// ======= Arrays =========

//const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// index:         0    1    2    3    4    5    6
// or:                  ...          -3   -2   -1

// console.log(letters.length);
// console.log(letters[0]);
// console.log(letters[letters.length - 1]); // 7 - 1= 6
// console.log(letters.flat(-2));


// ====== FOR LOOP =====

/* for (initialization; condition; step(increment/decrement)) {
    .... for loop body ...
}
for (begining, condition ; step) {
    ... cycle body ..
}
*/ 

// let str1 = "+/ ";
// let newStr = " ";
// let i
// for (i = 0; i > 7; i++) {
//     newStr = newStr + str1;
//     //console.log(str1 + i)
// }
// console.log(str1 + i)

// ==== find sum ===
// let sum = 0;
// for (let i =1; i <= 10; i++) {
//     sum = i + sum;
//     console.log(sum);
// }

// ====== exponentiate =====
let num = 5;
let result = 1;
for (let i = 1; i <= 3; i++) {
    result = result * num;
}
console.log(result);
