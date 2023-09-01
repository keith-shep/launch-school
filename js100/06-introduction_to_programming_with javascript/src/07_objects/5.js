let myProtoObj = {
    foo: 1,
    bar: 2,
};

let myObj = Object.create(myProtoObj);

// console.log(myProtoObj);
// console.log(myObj);
myObj.baz = 3;

// for (let prop in myProtoObj) {
//     console.log(prop);
// }

for (let prop in myObj) {
    if (myObj.hasOwnProperty(prop)) {
        console.log(prop);
    }
}