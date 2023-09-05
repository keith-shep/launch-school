function multiplesOfThree() {
  let bottom = 1;

  for (let top = 3; top <= 30; top += 3) {
    console.log(top + ' / ' + bottom + ' = 3');
    bottom += 1;
  }
}

multiplesOfThree; // is this missing the brackets ()?

// output:
// 3 / 1 = 3
// 6 / 2 = 3
// ...
// 27 / 9 = 3
// 30 / 10 = 3



