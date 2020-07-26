var tempGlobalMessages = [];

//just a global class so I can log stuff to tempGlobalMessages.
//I'm logging stuff to tempGlobalMessages because sometimes the console in chrome "lags". 
//The tempGlobalMessages is just a more surefire way to get the messages in order.
export default class GlobalFuncs {
	constructor() {
		this.tempGlobalMessages = tempGlobalMessages;
	}
	
}