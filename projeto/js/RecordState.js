import { State } from "./State.js";
import { StopState } from "./StopState.js";

export class RecordState extends State {

    play() {
        console.log("Cannot play while recording!!!");
    }

    record() {
        console.log("Already Recording!!!");
    }

    stop(manager) {
        console.log("Is Stopped!!!");
        manager.changeState(new StopState());
    }

}