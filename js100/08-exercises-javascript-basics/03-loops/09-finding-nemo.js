let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
  
  if (fish[i] === 'Nemo') {
    break;
  }
}