let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

console.log(objToCopy);

// function copyObj(obj, keysToRetain) {
//     let copy = Object.assign({}, obj);
//     if (!keysToRetain) return copy;
    
//     for (const key in copy) {
//         if (!keysToRetain.includes(key)) {
//             delete copy[key];
//         }
//     }
//     return copy;
// }


function copyObj(sourceObj, keys) {
    let destinationObj = {};
    
    if (keys) {
        keys.forEach(function(key) {
            destinationObj[key] = sourceObj[key];
        });
        return destinationObj;
    } else {
        return Object.assign(destinationObj, sourceObj);
    }
}