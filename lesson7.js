//======== string methods: split(), join(); =====

//==== split() devides  line

// let string = "Hello-world%";
// console.log(string);

// console.log(string.split(""));
// console.log(string);

// let stringNew = string.split(" ")
// console.log(stringNew);

// let array = ['a', 'b', 'c', 'd', 1, 2, 3];
// console.log(array);

// console.log(array.join());
// console.log(array);

// let newStringFromArray = array.join("");
// console.log(newStringFromArray);


// ====== Methods Array - po/push, shift/unshift ======

// push -> add an ellemet at the end
// pop -> remove last ellement 

// let letters = ['a', 'b', 'c', 'd', 'e'];
// letters.push('f', 's');
// letters.push(1, 5);
// letters.push(88);
// let c = letters.push('g'); // return quantity of elements
// console.log(letters);
// console.log(c);

// ====== unshift -> add an ellement at the beginning of an array
// ====== shift delete an element at the beginnig and move it
// ====== the second element becoms a first

// let bigLetters = ['A', 'B', 'C', 'D', 'E'];

// bigLetters.unshift('Z');
// let d = bigLetters.unshift('X', 'Y'); // returne quantity of elements
// console.log(bigLetters);
// console.log(d);

// ====== concat =======

// let girls = ['Tanya', 'Olya'];
// let boys = ['Boris', 'Oleg'];
// let friends = ['Sam', 'John'];
// const myChildren = girls.concat(boys, friends);

// console.log(myChildren);


// ======= push + spread operator =====

// ======= spread operator (...) =====

// let numbers = [4, 8, 99, 777, 1, 10];
// console.log(numbers);
// console.log(...numbers);

// console.log(Math.max(4, 8, 99, 777, 1, 10));
// console.log(Math.min(4, 8, 99, 777, 1, 10));
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// // ======== ==========
// let girls1 = ['Tanya', 'Olya', 'Anna'];
// console.log(girls1);
// console.log(girls1.toString());

// ========= replace() 
// The replace() method replace a specified value with another value in a string:

// let message = "Please 5 visit 5 Microsoft!";
// console.log(message);
// let newText = message.replaceAll('s', 'S');
// console.log(newText);

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools"); // /i flag (insensitive)


// ======= trim 
// Remove spaces with trim()

let text = "   Hello World!   ";
let result = text.trim();
console.log(text);
console.log(result);

// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

