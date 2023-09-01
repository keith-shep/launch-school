// function containsNumberThree(array) {
//     let result = array.filter(function(value) {
//         return value === 3;
//     });

//     return !!result.length;
// }


let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// console.log(containsNumberThree(numbers1));
// console.log(containsNumberThree(numbers2));
// console.log(containsNumberThree(numbers3));

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));