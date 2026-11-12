class Player {

    constructor() {
        this.stateManager = new StateManager();
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
