//Destructuring

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

// Old
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

//ES6
const { player, experience } = obj;
let { wizardLevel } = obj;