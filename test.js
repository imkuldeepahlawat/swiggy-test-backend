import assert from 'assert'
import Player from './gameObjects/player.js';
import MagicalArena from './gameObjects/magicalArena.js';

function runTests() {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const arena = new MagicalArena(playerA, playerB);

    // Test Player Class
    assert.strictEqual(playerA.getHealth(), 50);
    assert.strictEqual(playerA.getStrength(), 5);
    assert.strictEqual(playerA.getAttack(), 10);
    playerA.takeDamage(20);
    assert.strictEqual(playerA.getHealth(), 30);

    // Test MagicalArena Class
    assert.strictEqual(playerA.rollDice() >= 1 && playerA.rollDice() <= 6, true);

    // Test attackTurn
    arena.attackTurn(playerA, playerB);
    assert.strictEqual(playerB.getHealth() <= 100, true);

    // Test playGame
    arena.playGame();
    assert.strictEqual(playerA.getHealth() <= 0 || playerB.getHealth() <= 0, true);

    console.log('All tests passed!');
}

runTests();