class StateManager {

    constructor() {
        this.currentState = new StopState(this);
    }

    setState(state) {
        this.currentState = state;
    }

    play() {
        this.currentState.play();
    }

    record() {
        this.currentState.record();
    }

    stop() {
        this.currentState.stop();
    }

}