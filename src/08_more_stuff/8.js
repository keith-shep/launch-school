// function isNotANumber(value){
//     // return Number.isNaN(value);
//     // return Object.is(value, NaN);

//     // takes care of strings    
//     if (typeof value !== 'number') {
//         return false;
//     }

//     // takes care of infinity
//     if (value === Infinity || value === -Infinity) {
//         return false;
//     }

//     // takes care of 'real' numbers
//     if (value <= Infinity) {
//         return false;
//     }
    
//     return true;
// }


function isNotANumber(value){ 
    return value !== value;
}


console.log(isNotANumber(0));
console.log(isNotANumber(-0));
console.log(isNotANumber(NaN));
console.log(isNotANumber(Infinity));
console.log(isNotANumber(-Infinity));
console.log(isNotANumber(1.23));
console.log(isNotANumber(100));
console.log(isNotANumber(Math.PI));
console.log(isNotANumber('hello'));
