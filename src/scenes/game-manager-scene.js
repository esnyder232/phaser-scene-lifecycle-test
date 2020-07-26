import LifecycleTestScene from "./lifecycle-test-scene.js"
import LifecycleTestScene2 from "./lifecycle-test-scene2.js"
import GlobalFuncs from "../global-funcs.js"

export default class GameManagerScene extends Phaser.Scene {
	constructor() {
		super();
		this.myMessages = [];
		this.globalfuncs = new GlobalFuncs();
	}
	  
	create() {
		//create other scenes
		console.log('adding scenes...');
		this.scene1 = this.scene.add('lifecycle-test-scene', LifecycleTestScene, true);
		this.scene2 = this.scene.add('lifecycle-test-scene2', LifecycleTestScene2);


		window.addEventListener("keyup", (e) => {
			console.log('keycode:' + e.keyCode);
			switch(e.keyCode) {
				case 81: //q
					console.log('q clicked. pring log:');
					console.log(this.globalfuncs.tempGlobalMessages);
					break;
			}
		})


		//set timeouts
		window.setTimeout(() => {
			var msg = "+++++++ PAUSING SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.pause();
		}, 50);
		
		window.setTimeout(() => {
			var msg = "+++++++ UNPAUSE SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.resume();
		}, 100);

		window.setTimeout(() => {
			var msg = "+++++++ SLEEP SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.sleep();
		}, 150);

		window.setTimeout(() => {
			var msg = "+++++++ AWAKE SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.wake();
		}, 200);
		


		///////////////////////////////////////////
		//testing scene transitions
		window.setTimeout(() => {
			var msg = "+++++++ TRANSITION TO SCENE2 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene.transition({ target: 'lifecycle-test-scene2', duration:100 });
		}, 250);
		///////////////////////////////////////////


		///////////////////////////////////////////
		//testing shutdown/destroy
		window.setTimeout(() => {
			var msg = "+++++++ SHUTDOWN SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.stop();
		}, 400);

		window.setTimeout(() => {
			var msg = "+++++++ DESTROY SCENE1 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene1.scene.remove();
		}, 450);

		window.setTimeout(() => {
			var msg = "+++++++ SHUTDOWN SCENE2 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene2.scene.stop();
		}, 500);

		window.setTimeout(() => {
			var msg = "+++++++ DESTROY SCENE2 NOW +++++++";
			console.log(msg)
			this.globalfuncs.tempGlobalMessages.push(msg);
			this.scene2.scene.remove();
		}, 550);
		///////////////////////////////////////////

		//print out log
		window.setTimeout(() => {
			console.log(this.globalfuncs.tempGlobalMessages);
		}, 600);
	}
	  
	update(timeElapsed, dt) {
	}
}

