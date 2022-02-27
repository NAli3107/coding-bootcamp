// TODO: Add a comment describing what kind of function this is
/* This is a constructor function called character that has 5 parameters.*/
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
/* Prototype here allows this function to inherit the features of character constructor function so that we can log stats.*/
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
/* This function accesses the character constructor function and informs user when their character has died based on the number hitpoints they have. */
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
/* A new character's hitPoints is depleting by subtracting other original character's strength points.*/
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
/* age increases by 1, strength increases by 5, hitpoints increase by 25.*/
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
/* I expect to see 'Crusher', 'Warrior', 25, 10, 55 */
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
/* I expect to see Warrior is still alive until their hitpoints reach 0. */

warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
/* I expect to see Warrior's age increases by 1, strength increases by 5, hitpoints increase by 25.  */
rogue.printStats();
