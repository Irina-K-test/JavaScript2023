//let str = "Hello world it's me!"
let result = []
let arr = ['a', 'Anna', 'Stan', 'Peter', 'Robert', 'b', 12, [40, 'dom', 'hello', 'world', 40, 8]]
// index    0      1       2       3        4       5                       6
//     j         0123            01234                    0        1        2     3  4    5

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === "o") {
//             //console.log(arr[i]);  
//             result.push(arr[i])

//         }
//     }
//     //console.log(arr[i]);
//     // if (arr[i].length > 3) { 
//     //     console.log(arr[i])
// }
// console.log(result)

//console.log(str[i])
//}
// console.log(arr[3][2])
// console.log(arr[6][2])
//console.log(arr[6][3].length)

for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'number') {
        result.push(arr[i])
    } else {
        for (let j = 0; j < arr[i].length; j++) {

            if (typeof arr[i][j] === 'number') {
                result.push(arr[j])
                console.log (result)
            }
        }
    }
}
//console.log (result)