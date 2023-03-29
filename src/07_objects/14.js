function hello(greeting, name) {
    return greeting + ' ' + name;
}
  
function xyzzy() {
    return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();


// #variables, 
// greeting, name, howdy, foo, 
// MISSING: hello, xyzzy

// #object property names, 
// a,b,c,d

// #primitive values, 
// 1,2,3,4,5, 'Hi', 'Grace', ' '

// #objects 
// { a: 1, b: 2, c: [3, 4, 5], d: {} }, 
// [3,4,5], 
// {}
// hello(), 
// xyzzy()
