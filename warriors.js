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