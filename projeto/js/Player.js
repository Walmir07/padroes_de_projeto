class Player {

    constructor() {
        this.stateManager = new this.stateManager();
    }

    play() {
        this.stateManager.play();
    }

    record() {
        this.stateManager.record();
    }

    stop() {
        this.stateManager.stop();
    }
    
}