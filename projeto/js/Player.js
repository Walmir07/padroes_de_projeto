import { StateManager } from "./StateManager.js"

export class Player {

    constructor() {
        this.stateManager = new StateManager(this);
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
