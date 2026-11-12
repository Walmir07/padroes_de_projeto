class PlayState extends State {
    
    play() {
        if(this.stateManager.currentState instanceof PlayState) {
            console.log("Already Playing!!!");
        }
        else {
            this.stateManager.setState(new PlayState(this.stateManager));
            console.log("Is Playing!!!");
        }
    }

    record() {
        console.log("Cannot record while playing!!!");
    }

    stop() {
        console.log("Is Stopped!!!");
        this.stateManager.setState(new StopState(this.stateManager));
    }

}