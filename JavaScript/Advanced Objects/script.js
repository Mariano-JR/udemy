// reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1 === object2 // true
object1 === object3 // false

// context vs scope
 const object4 = {
    a: function() {
        console.log(this); // this = window, quando utlizada dentro de um object, se torna como raiz do object.
    }
 }

// instantiation
class Player {
    constructor(name, type) { // "constructor" sempre deve ser utilizado ao criar uma class que será clonada e mais objetos, será como padrão pra esses novos objetos criados a partir dessa class
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type) // "super" sempre deve ser usado quado se estar chamando propriedades de outra class
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

// "new", utlizado para criar novos objects a partir de outra class.
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');