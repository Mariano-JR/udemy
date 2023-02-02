const array = [1,2,3,4,5];

array.flat(); // [1,2,3,4,5]

const array2 = [1,[2,3],[4,5]];

array2.flat(); // [1,2,3,4,5]

const array3 = [1,2,[3,4,[5]]];

array3.flat();  // [1,2,3,4,[5]]
array3.flat(2); // [1,2,3,4,5]

const entries = ['bob', 'sally',,,,,,'cindy'];
entries.flat(); //['bob', 'sally', 'cindy']

/----------------------------------------/

const userEmail = '           eddytheeagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail.com        ';
console.log(userEmail.trimStart()); // eddytheeagle@gmail.com
console.log(userEmail2.trimEnd());  // jonnydangerous@gmail.com

/---------------------------------------/

const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
Object.fromEntries(userProfiles);
/* { commanderTom: 23
     derekZlander: 40
     hansel: 18 } */