
let first = 'hello';
let second = 'world';


console.log(first + ' ' + second); // method 1
console.log(`${first} ${second}`); // method 2


let words = [first, second];
console.log(words.join(' ')); // method 3

console.log(first.concat(' ', second)); // method 4