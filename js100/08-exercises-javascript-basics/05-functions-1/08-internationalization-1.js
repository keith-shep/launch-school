function greet(languageCode) {
  if (languageCode === 'en') {
    return 'Hi!';
  } else if (languageCode === 'fr') {
    return 'Salut!';
  } else if (languageCode === 'pt') {
    return 'Olá!';
  } else if (languageCode === 'de') {
    return 'Hallo!';
  } else if (languageCode === 'sv') {
    return 'Hej!';
  } else if (languageCode === 'af') {
    return 'Haai!';
  }
}

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'
