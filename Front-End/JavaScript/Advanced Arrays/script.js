//Advanced Arrays
const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce
//map
const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

//map - forma mais rapida e facil de fazer loop criando um novo array, no caso, pegou todos os numeros presentes no "array" e criou um novo multiplicando todos por 2.

//filter
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

//filter - filtra items do array de acordo com os parametros estabelecidos, criando um novo array com os resultado, no caso, retornará um novo array apenas com os numeros maiores que 5.

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArray);

//reduce - retorna um resultado de acordo com os parametros estabelecidos, no caso, retornará a soma dos numeros do array iniciando pelo parametro "0".