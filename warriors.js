//Creating an object constructor
function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1,
    this.weapon = "Wooden Sword",
    this.power = Math.floor(Math.random() * 100 + 1)
}


var maleWarrior = new Warrior("John", "M");
var femaleWarrior = new Warrior("Sally", "F");
console.log(maleWarrior);
console.log(femaleWarrior);

function fight(warrior) {
    console.log(warrior.name +  " rushes to the arena with " + warrior.weapon);
    
    return function(opponents) {
        if (warrior.power > opponents.power) {
            console.log("The warrior's attack is " + warrior.power);
            console.log("The opponent's attack is " + opponents.power);
            console.log(warrior.name + " wins!");
        }
        else if(warrior.power < opponents.power) {
            console.log("The warrior's attack is " + warrior.power);
            console.log("The opponent's attack is " + opponents.power);
            console.log("Opponent warrior wins!");
        }
        else if (warrior.power === opponents.power) {
            console.log("The warrior's attack is " + warrior.power);
            console.log("The opponent's attack is " + opponents.power);
            console.log("Draw!");
        }
    }
}

fight(maleWarrior)(femaleWarrior);