let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];


// function allMatches(wordList, regex) {
//     let matches = [];
//     for (const value of wordList) {
//         if (regex.test(value)) {
//             matches.push(value);
//         };
//     }
//     return matches;
// }
  
function allMatches(wordList, regex){
    return wordList.filter(word => regex.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']