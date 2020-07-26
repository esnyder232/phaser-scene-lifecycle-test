import Phaser from 'phaser';
import GameManagerScene from './scenes/game-manager-scene.js'

export default class App {
	constructor() {
		this.game = {};
		this.config = {};

		this.config = {
			type: Phaser.AUTO,
			physics: {
				default: 'arcade',
				debug: false,
				arcade: {
					gravity: {
						y: 300
					}
				}
			}
		}

		this.game = new Phaser.Game(this.config);
		console.log(this.game);
		this.game.scene.add('game-manager-scene', GameManagerScene, true);
	}	
}

var app = new App();

