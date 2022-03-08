// ~~~~~~ Create Ninja Object ~~~~~~~~ // 

class Ninja {

    // ~~~~~ Ninja Constructor ~~~~~ //
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 30;
        this.strength = 30;
    }

    // ~~~~~ Ninja methods ~~~~~ //
    sayName() {
        console.log(`My Ninja name is ... ${this.name}`);
    }

    showStats() {
        console.log(`^-^-^ Ninja's Stats ^-^-^`);
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
    }

    practiceTaijutsu() {
        this.strength += 15;
    }
}

// ***** Test ***** // 
const warrior = new Ninja("Hattori Mochizuki", 150);
warrior.sayName();
warrior.showStats();
warrior.drinkSake();
warrior.practiceTaijutsu();
warrior.showStats();