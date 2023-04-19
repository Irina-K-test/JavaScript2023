// let num1 = 5;
// let num2 = 10;
// let operator = '-'

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             console.log("The result is " + result);
//             break;
//         case "-":
//             result = num1 - num2;
//             console.log("The result is " + result);
//             break;
//         case "*":
//             result = num1 * num2;
//             console.log("The result is " + result);
//             break;
//         case "/":
//             result = num1 / num2;
//             console.log("The result is " + result);
//            break;
//            default:
//            console.log("Unknown operation, pleas enter correct operator")
//     }



// ================= 2- even numbers =====

// //  1 
// for (let i = 2; i <= 10; i+=2) {
//     console.log(i)
// }
// // 2 
// for (let i = 1; i <= 10; i ++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// ======= 3 from interview =====

// let sum1 = 0;
// let sum2 = 0;

// let arr = ['(',')','(',')',')'];
// for (let i = 0; i < arr.length; i ++) {
//     if (arr[i] == '(') {
//       sum1 += 1; 
//    }
//     else if (arr[i] == ')') {
//       sum2 += 1;
//   }
// } 
// console.log('openning = ' + sum1 + ', closing = ' + sum2)

// if (sum1 == sum2) {
//     console.log('equal')
// }
// else console.log('not equal')

// ========= 4 ========

let text = "You are the best QA ever";
let newText = '';
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (count % 2 == 0) {
        newText = newText + text[i] + "br";
    } 
    count += 2;
}
console.log(newText)