class RecordState extends State {

    play() {
        console.log("Cannot play while recording!!!");
    }

    record() {
        if(this.stateManager.currentState instanceof RecordState) {
            console.log("Already Recording!!!");
        }
        else {
            this.stateManager.setState(new RecordState(this.stateManager));
            console.log("Is Recording!!!");
        }
    }

    stop() {
        console.log("Is Stopped!!!");
        this.stateManager.setState(new StopState(this.stateManager));
    }

}