// function factorial(n) {
//     if (n < 2) return n;
//     return factorial(n-1) * n
// }

function factorial(n) {
    if (n === 1) return n;
    return factorial(n-1) * n
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320



// factorial(1) = 1
// factorial(2) = factorial(1) * 2
// factorial(3) = factorial(2) * 3
// factorial(4) = factorial(3) * 4
// factorial(5) = factorial(4) * 5
// factorial(n) = factorial(n - 1) * n