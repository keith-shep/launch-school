// function oddLengths(array) {
//     return array
//         .map(function(value) {
//             return value.length
//         })
//         .filter(function(length) {
//             return length % 2 === 1;
//         });
// }

function oddLengths(array) {
    return array
        .map(value => value.length)
        .filter(length => length % 2 === 1);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

