// Metodo de clonagem de object
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c = 5;
console.log(obj); // {a: 'a', b: 'b', c: 5}
console.log(clone); // {a: 'a', b: 'b', c: 'c'}
console.log(clone2); // {a: 'a', b: 'b', c: 'c'}