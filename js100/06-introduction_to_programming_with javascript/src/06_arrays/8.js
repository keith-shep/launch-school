// function oddLengths(array) {
//     return array.reduce(function(acc, string){
//         let length = string.length;
//         if (length % 2 === 1) {
//             return acc.concat(length);
//         } else {
//             return acc;
//         }
//     }, [])
// }

function oddLengths(array) {
    return array.reduce(function(acc, string){
        let length = string.length;
        if (length % 2 === 1) {
            return acc.concat(length);
        } 
        return acc;
    }, [])
}

// function oddLengths(array) {
//     return array.reduce(function(acc, string){
//         return string.length % 2 === 1 ? acc.concat(string.length) : acc;
//     }, [])
// }

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]