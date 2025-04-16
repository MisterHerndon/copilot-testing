// This file initializes the Tetris game, sets up the canvas, and starts the game loop.

import Game from './game';

const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const game = new Game(context);

function update() {
    game.update();
    game.draw();
    requestAnimationFrame(update);
}

game.start();
update();