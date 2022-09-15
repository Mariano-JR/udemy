// Operator "??"
// Optional Operator "?."
let andrei_pokemon = {
    raichu: {
         species: 'Mouse Pokemon',
         height: 0.8,
         weight: 30,
         power: 0
    }
}

// Old
// if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
//      let weight2 = andrei_pokemon.pikachu.weight;
//      console.log(weight2);
// } else {
//      let weight2 = undefined;
//      console.log(weight2);
// };

// New
let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3); // Undefined

let weight4 = andrei_pokemon?.raichu?.weight
console.log(weight4); // 30

let power = andrei_pokemon?.raichu?.power ?? 'No Power'
console.log(power); // 0

let power1 = andrei_pokemon?.raichu?.power || 'No Power'
console.log(power1); // No Power