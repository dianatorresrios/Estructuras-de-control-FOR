//PRIMER  PUNTO "imprime los números impares del 1 al 50" //

for (var i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//SEGUNOD PUNTO//

const pokemonList = [
  { number: 1, name: 'Bulbasaur' },
  { number: 2, name: 'Ivysaur' },
  { number: 3, name: 'Venusaur' },
  // ...Resto de los Pokémons...
];

const userInput = parseInt(prompt('Ingrese un número:'));
for (let i = 1; i <= userInput; i++) {
  if (i % 5 === 0) {
    const pokemon = pokemonList.find(p => p.number === i);
    console.log(pokemon.name);
  }
}

//TERCER PUNTO//

let arreglo = [4,"dos",8,"tres",5,9,1,"cero"];

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === 'number') {
    console.log(arreglo[i]);
  }
}