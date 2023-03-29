function bar(arg1, arg2) {
    let foo = 'Hello';
    const qux = {
      abc: [1, 2, 3, [4, 5, 6]],
      def: null,
      ghi: NaN,
      jkl: foo,
      mno: arg1,
      pqr: arg2,
    };
  
    return qux;
}
  
let result = bar('Victor', 'Antonina');


// #variables, 
// [x]result
// [x]foo
// [x]qux
// [x]bar - function
// [x]arg1, arg2 - function parameter

// #object property names, 
// [x]abc
// [x]def
// [x]ghi
// [x]jkl
// [x]mno
// [x]pqr
// [x]0, 1, 2, 3 - array
// [x]0, 1, 2

// #primitive values, 
// [x]Victor
// [x]Antonia
// [x]Hello
// [x]abc
// [x]def
// [x]ghi
// [x]jkl
// [x]mno
// [x]pqr
// [x]0, 1, 2, 3 - array
// [x]0, 1, 2
// [x]null
// [x]NaN
// 1,2,3,4,5,6

// #objects 
// [x]{
//     abc: [1, 2, 3, [4, 5, 6]],
//     def: null,
//     ghi: NaN,
//     jkl: foo,
//     mno: arg1,
//     pqr: arg2,
// };

// [x][1, 2, 3, [4, 5, 6]]
// [x][4,5,6]
// [x]bar()