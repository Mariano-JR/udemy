// String.replace('old', 'new')
// String.replaceAll('old', 'new')

const str = 'ztm is the best of the best';

const newStr = str.replace('best', 'worst');

console.log(newStr); // 'ztm is the worst of the best'

const newStr2 = str.replaceAll('best', 'worst');

console.log(newStr2); // 'ztm is the worst of the worst'