let dataBase = [
    {
        username: "mariano",
        password: "1234567",
    }
];

let newFeed = [
    {
        username: "Stephanie",
        timeline: "Whatching novel now",
    },

    {
        username: "Luna",
        timeline: "Me too with my mommy",
    },

    {
        username: "mariano",
        timeline: "Learning JavaScript",
    },
    
];

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === dataBase[0].username && 
        pass === dataBase[0].password) {
        console.log(newFeed);
    } else {
        alert("Sorry, wrong username and password");
    };
};

signIn(userNamePrompt, passwordPrompt);