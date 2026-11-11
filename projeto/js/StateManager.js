import { StopState } from './StopState.js';

export class StateManager {
    constructor(player){
        this.player = player;
        this.currentState = new StopState();
    }

    changeState(newState){
        this.currentState = newState;
    }

    play(){
        this.currentState.play(this);
    }

    record(){
        this.currentState.record(this);
    }

    stop(){
        this.currentState.stop(this);
    }
}