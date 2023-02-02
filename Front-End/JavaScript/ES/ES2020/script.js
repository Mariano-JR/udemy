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


//allSettled()
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 6000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))

Promise.all([ promiseOne, promiseTwo ]).then(data => console.log(data))// Nesse caso, as duas promises precisam ser concluidas com exito
    .catch(e => console.log('something failed', e)) // 'something failed' undefined

Promise.allSettled([ promiseOne, promiseTwo ]).then(data => console.log(data))// no allSettled, as promises retornaram, mesmo que alguma delas falhem, após todas terem um resultado, nesse caso após os 6 segundos da primeira promise
    .catch(e => console.log('something failed', e)) // retornara as promises