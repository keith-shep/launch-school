function sumOfSquares(array) {
    return array.reduce(function(acc, value) {
        return acc + (value * value);
    });
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

3 + 25 + 49 