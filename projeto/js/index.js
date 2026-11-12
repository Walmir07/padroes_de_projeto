let player = new Player();

function play(){
    player.play();
}

function record(){
    player.record();
}

function stop(){
    player.stop();
}

buttonPlay.onclick = play;
buttonRecord.onclick = record;
buttonStop.onclick = stop;

// Código antigo sem padrão //

/* 

let isStopped = true;
let isPlaying = false;
let isRecording = false;

function play() {
    if(isPlaying){
        console.log("Already Playing!!!")
    }
    else if (isRecording){
        console.log("Cannot play while recording!!!")
    }
    else{
        isPlaying = true;
        isStopped = false;
        isRecording = false;
        console.log("Is playing!!!");
    }
    
} 

function record() {
    if(isRecording){
        console.log("Already Recording!!!")
    }
    else if (isPlaying){
        console.log("Cannot play while playing!!!")
    }
    else{
        isRecording = true;
        isPlaying = false;
        isStopped = false;
        console.log("Is recording!!!"); 
    }
} 

function stop() { 
    if(isStopped){
        console.log("Already stopped!!!")
    }
    else{
        isStopped = true;
        isPlaying = false;   
        isRecording = false;
        console.log("Is stopped!!!"); 
    }
}

buttonPlay.onclick = play;
buttonRecord.onclick = record;
buttonStop.onclick = stop; 

*/