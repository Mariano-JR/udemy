// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const solution = [];
array.forEach(user => {
    let { username } = user;
    username = username + "!";
    solution.push(username);
});

console.log(solution);



//Create an array using map that has all the usernames with a "? to each of the usernames
const solution1 = array.map(user => user.username + "!");

console.log(solution1);

//Filter the array to only include users who are on team: red
const solution2 = array.filter(user => user.team === "red");

console.log(solution2);

//Find out the total score of all users using reduce
const solution3 = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);

console.log(solution3);

// (1), what is the value of i? 
// Index in array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
//(2) solution
const arrayNum1 = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum1.map(num => num * 2);
console.log(newArray1);



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonus = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
});

console.log(bonus);