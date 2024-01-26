class MagicalArena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
        // true is for player A
        this.attackTurnOfPlayer = true
        // choosing first attack according to health
        if (this.playerA.health > this.playerB.health) {
            this.attackTurnOfPlayer = false
        }
    }

    playGame() {
        while (this.playerA.health > 0 && this.playerB.health > 0) {
            // attack according to player trun
            if (this.attackTurnOfPlayer) {
                this.attackTurn(this.playerA, this.playerB);
            } else {
                this.attackTurn(this.playerB, this.playerA);
            }

            // change the turn of the player
            this.attackTurnOfPlayer = !this.attackTurnOfPlayer
            if (this.playerB.health <= 0) {
                console.log('Player A wins!');
                break;
            }

            // this.attackTurn(this.playerB, this.playerA);
            if (this.playerA.health <= 0) {
                console.log('Player B wins!');
                break;
            }
        }
    }

    attackTurn(attacker, defender) {
        const attackDamage = attacker.attack * attacker.rollDice();
        const defendStrength = defender.strength * defender.rollDice();
        const damageTaken = Math.max(0, attackDamage - defendStrength);
        defender.takeDamage(damageTaken);

        console.log(`${attacker === this.playerA ? 'Player A' : 'Player B'} attacks for ${damageTaken} damage.`);
        console.log(`Player A: ${this.playerA.health} Health, Player B: ${this.playerB.health} Health\n`);
    }
}
export default MagicalArena