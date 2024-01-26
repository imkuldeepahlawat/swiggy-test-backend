import Player from "../gameObjects/player.js";

export function createPlayer(health, strength, attack) {
    return new Player(health, strength, attack);
}