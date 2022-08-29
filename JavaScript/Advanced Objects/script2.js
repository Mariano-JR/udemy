// Metodo de clonagem de object
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'Try and copy me'
    }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}; // clonagem do object superficial
let superClone = JSON.parse(JSON.stringify(obj)); // clonagem do objeto raiz

obj.c.deep = 5;
console.log(obj); // {a: 'a', b: 'b', c: 5}
console.log(clone); // {a: 'a', b: 'b', c: 5}
console.log(clone2); // {a: 'a', b: 'b', c: 5}
console.log(superClone); // a: 'a', b: 'b', c: { deep: 'Try and copy me'}