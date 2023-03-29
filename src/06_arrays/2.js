let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenNumbers = myArray.filter(function(number) {
    return number % 2 === 0;
})

console.log(evenNumbers);