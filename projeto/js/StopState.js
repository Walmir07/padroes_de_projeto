class StopState extends State {

    play() {
        console.log("Is Playing!!!");
        this.stateManager.setState(new PlayState(this.stateManager));
    }

    record() {
        console.log("Is Recording!!!");
        this.stateManager.setState(new RecordState(this.stateManager));
    }
    
    stop() {
        if(this.stateManager.currentState instanceof StopState) {
            console.log("Already Stopped!!!");
        } 
        else {
            this.stateManager.setState(new StopState(this.stateManager));
            console.log("Is Stopped!!!");
        }
    }

}