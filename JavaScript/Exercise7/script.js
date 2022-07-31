let database = [
    {
        username: "mariano",
        password: "1234567",
    },

    {
        username: "luna",
        password: "1234",
    },

    {
        username: "stephanie",
        password: "567",
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

function isUserValid(user, pass) {
    for (var i = 0; i< database.length; i++) {
        if (database[i].username === user &&
            database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newFeed);
    } else {
        alert("Sorry, wrong username and password");
    };
};

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);