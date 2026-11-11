
import { State } from "./State.js";
import { StopState } from "./StopState.js";

export class PlayState extends State {

    play() {
        console.log("Already Playing!!!");
    }

    record() {
        console.log("Cannot record while playing!!!");
    }

    stop(manager) {
        console.log("Is Stopped!!!");
        manager.changeState(new StopState());
    }

}
