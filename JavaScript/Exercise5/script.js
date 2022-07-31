/*
function checkDriveAge() {
    let age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulation on your first year of driving. Enjoy the ride!");
    }
}

checkDriveAge(); */

/*
let checkDriverAge = function() {
    let age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Powering On. Enjoy the ride!");
    }
}

checkDriverAge();
*/

let checkDriveAge2 = (age) => {
    if (Number(age) < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        console.log("Powering On. Enjoy the ride!");
    }
}

checkDriveAge2(92);