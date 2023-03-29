// function evenOrOdd(number) {    
//     if (typeof number !== 'number') {
//         throw new Error('not a number');
//     }

//     if (number % 2 === 0) {
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
// }

function evenOrOdd(number) {    
    // if (typeof number !== 'number') {
    //     throw new Error('not a number');
    // }
    if (!Number.isInteger(number)) {
        console.log('not a number');
        return;
    }

    if (number % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

// evenOrOdd(1);
// evenOrOdd(2);
// evenOrOdd('123');