class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    takeDamage(damage) {
        this.health = Math.max(0, this.health - damage);
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
    // getter methods
    getHealth() {
        return this.health;
    }
    getStrength() {
        return this.strength;
    }
    getAttack() {
        return this.attack;
    }
}


export default Player;