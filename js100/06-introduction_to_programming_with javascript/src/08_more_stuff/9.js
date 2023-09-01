function isNegativeZero(value) {
    if (typeof value !== 'number') return false;
    
    return 1 / value === -Infinity
    
}


console.log(isNegativeZero(0));
console.log(isNegativeZero(10));
console.log(isNegativeZero(-0));