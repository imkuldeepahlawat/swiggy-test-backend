
import MagicalArena from "./gameObjects/magicalArena.js"
import { createPlayer } from "./utils/utils.js"

class Game {
    constructor(playerA, playerB) {
        // creating playerA Health Strength Attack
        const playerAhealth = Math.floor(Math.random() * 100)
        const playerAstrength = Math.floor(Math.random() * 70)
        const playerAattack = Math.floor(Math.random() * 80)
        // creating playerB Health Strength Attack
        const playerBhealth = Math.floor(Math.random() * 100)
        const playerBstrength = Math.floor(Math.random() * 70)
        const playerBattack = Math.floor(Math.random() * 80)
        this.playerA = createPlayer(
            playerAhealth,
            playerAstrength,
            playerAattack
        );

        this.playerB = createPlayer(
            playerBhealth,
            playerBstrength,
            playerBattack
        );

        this.arena = new MagicalArena(this.playerA, this.playerB);
    }

    startGame() {
        console.log("Starting game", '\n')
        console.log("Player A: Health = " + this.playerA.health)
        console.log("Player A: Strength = " + this.playerA.strength)
        console.log("Player A: Attack = " + this.playerA.attack, '\n', '------------------', '\n')
        console.log("Player B: Health = " + this.playerB.health)
        console.log("Player B: Strength = " + this.playerB.strength)
        console.log("Player B: Attack = " + this.playerB.attack, '\n', '------------------', '\n')

        this.arena.playGame();
    }
}

export default Game