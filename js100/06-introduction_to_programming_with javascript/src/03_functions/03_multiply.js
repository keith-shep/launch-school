function getNumber(prompt) {
    let rlSync = require('readline-sync');
    let number = Number(rlSync.question(prompt));
    return number;
}

function multiply(left, right) {
    return left * right;
}

let firstNumber = getNumber("Enter the first number: ");
let secondNumber = getNumber("Enter the second number: ");

let result = multiply(firstNumber, secondNumber);

console.log(`${firstNumber} * ${secondNumber} = ${result}`);
