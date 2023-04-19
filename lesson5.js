// ===== functions ========

//let x;

// function sum(a = 10, b = 12) {
//     return a + b;
// }
// console.log(sum())

// function myFunction() {
//     let carName = 'Volvo';
// }

let name1 = 'Anna';// global
let great = "Hi"; 
//consol.log(name1);

function showMessage(name1) { //local
return name1;
}
console.log(showMessage(name1));

function login(email, pass) {
    typeEmail(email)
    typePass(pass)
    clockSubmit()

}