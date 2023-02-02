//Closures
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second();
}

const newFunc = first();
newFunc();

//Closures - Scope filho sempre tem acesso ao Scope pai, mas o Scope pai não tem acesso ao Scope filho, no caso, o valor de "greet" foi acessado pela function "second", por ser filho da function "first".

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4); //12

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); //25
multiplyBy5(10); //50
multiplyBy5(11); //55

//Currying - Ultilizado para passar parametros de formas individuais, um por um, criando mais de uma function, no caso, curriedMultiply criou a function "a" que tem como filho a function "b" que retorna o valor de a * b.

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); //7

//Compose - Coloca duas function juntas para formar uma terceira function que retornará o valor da outra de dentro para fora, no caso, "g" que é igual a num + 1, tem como parametro "a" que é "5", 5 + 1, retorna 6, "f" tambem é igual a num + 1, so que tem como parametro "g", que retornou 6, então f = 6 + 1, f = 7.