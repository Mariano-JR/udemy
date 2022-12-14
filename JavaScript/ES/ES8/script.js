'Turtle'.padStart(10); // '          Turtle'
'Turtle'.padEnd(10);   // 'Turtle          '

/----------------------------------------/

const fun = (a,b,c,d,) => { // ',' não se tornará mais um erro no codigo
    console.log(a);
};

fun(1,2,3,4); // 1

/----------------------------------------/

//Retorno de valores de Objects em Arrays

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
// username0 Santa
// username1 Rudolf
// username2 Mr.Grinch


Object.values(obj).forEach(value => {
    console.log(value);
})
// Santa
// Rudolf
// Mr.Grinch

Object.entries(obj).forEach(value => {
    console.log(value);
})
// ['username0', 'Santa']
// ['username1', 'Rudolf']
// ['username2', 'Mr.Grinch']

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});
// ['Santa0', 'Rudolf1', 'Mr.Grinch2']