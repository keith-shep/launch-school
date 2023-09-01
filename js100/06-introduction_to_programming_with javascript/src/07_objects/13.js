function foo(bar) {
    console.log(bar());
}


foo(function() { return 'Welcome' });    // Should print 'Welcome'
foo(function() { return 3.1415 });    // Should print 3.1415
foo(function() { return [1, 2, 3] });    // Should print [1, 2, 3]




// let counter = {count: 0}

// function test() {
//     if (counter.count === 0) {
//         counter.count += 1;
//         return 'Welcome';
//     } else if (counter.count === 1) {
//         counter.count += 1;
//         return 3.1415;
//     } else {
//         return [1,2,3];
//     }
// }



// foo(test);    // Should print 'Welcome'
// foo(test);    // Should print 3.1415
// foo(test);    // Should print [1, 2, 3]