import { State } from "./State.js";
import { PlayState } from "./PlayState.js";
import { RecordState } from "./RecordState.js";

export class StopState extends State {

    play(manager) {
        console.log("Is Playing!!!");
        manager.changeState(new PlayState());
    }

    record(manager) {
        console.log("Is Recording!!!");
        manager.changeState(new RecordState());
    }

    stop() {
        console.log("Already Stopped!!!");
    }

}
