// For Fighter's turns
let turn = true;

// Fighter Contstructor Function
function Fighter(name, strength, agility, vitality) {
  this.name = name;
  this.strength = strength;
  this.agility = agility;
  this.vitality = vitality;
  this.getName = function () {
    return this.name;
  };
  this.getHp = function () {
    return 50 + this.vitality * 10 + this.strength * 5 + this.agility * 3;
  };
  this.takeDamage = function (damage) {
    let def =
      10 + this.agility * 5 + this.strength * 3 + this.vitality - damage;
    return def;
  };
  this.dealDamage = function (fighter) {
    let damage = 10 + this.strength * 5 - this.agility * 3;
    return { damage, msg: `${fighter.getName()} received damage!` };
  };
}

// Create 2 Fighter objects
const fighter1 = new Fighter("Macvilla", 15, 10, 5);

const fighter2 = new Fighter("Mamster", 12, 15, 3);

// Main Function
function fight(f1, f2) {
  // initialized players hp
  let hp1 = f1.getHp();
  let hp2 = f2.getHp();

  // Make the player move in turns.
  while (true) {
    if (turn) {
      console.log(`${f1.dealDamage(f2).msg} remaining HP: ${hp2}`);
      alert(`${f1.getName()} turns to attack!`);
      hp2 -= f1.dealDamage(f2).damage;
      hp1 -= f1.takeDamage(f2.dealDamage(f1).damage);
    } else {
      console.log(`${f2.dealDamage(f1).msg} remaining HP: ${hp2}`);
      alert(`${f2.getName()} turns to attack!`);
      hp1 -= f2.dealDamage(f1).damage;
      hp2 -= f2.takeDamage(f1.dealDamage(f2).damage);
    }

    // Negate the value to alternate moves.
    turn = !turn;

    // Check if the game is over.
    if (hp1 < 0 || hp2 < 0) {
      console.log("game over!");
      if (hp1 > hp2) {
        console.log(`${f1.getName()} won!`);
      } else {
        console.log(`${f2.getName()} won!`);
      }
      break;
    }
  }
}

fight(fighter1, fighter2);
