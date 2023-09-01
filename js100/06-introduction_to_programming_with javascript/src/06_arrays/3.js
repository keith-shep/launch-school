let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
];

// let evenNumbers = [];
// for (let i = 0; i < myArray.length; i += 1) {
//     for (let j = 0; j < myArray.length; j+= 1) {
//         const element = myArray[i][j];
//         if (element % 2 === 0) {
//             evenNumbers.push(element)
//         }
//     }
// }

// console.log(evenNumbers);



myArray.forEach(function(array) {
    array.forEach(function(value) {
        if (value % 2 === 0) {
            console.log(value);
        }
    })
});


