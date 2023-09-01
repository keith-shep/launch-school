let obj = {
    b: 2,
    a: 1,
    c: 3,
};

// let res = Object.keys(obj);

// res = res.map(function(value) {
//     return value.toUpperCase();
// });

let objKeys = Object.keys(obj);

let upperKeys = objKeys.map(key => key.toUpperCase());

console.log(obj);
console.log(upperKeys);