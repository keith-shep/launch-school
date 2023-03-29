let list1 = [1, 6, 3, 2]; // 6
let list2 = [-1, -6, -3, -2]; // -1
let list3 = [2, 2]; // 2



// function largestValue(list) {
//     let largest = list[0];
//     if (!largest) return null;

//     for (const value of list) {
//         if (value > largest) {
//             largest = value
//         }
//     }
//     return largest;
// }

// console.log(largestValue(list1));
// console.log(largestValue(list2));
// console.log(largestValue(list3));

console.log(Math.max(...list1));
console.log(Math.max(...list2));
console.log(Math.max(...list3));
