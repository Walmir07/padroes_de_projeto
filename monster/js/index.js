function hitMonster() {
    let audioHitMonster = new Audio('./audios/monster-hit.mp3');
    let audioRoarMonster = new Audio('./audios/monster-roar.mp3');
    audioRoarMonster.play();
    audioHitMonster.play();
}

function roarMonster() {
    let audioRoarMonster = new Audio('./audios/monster-roar.mp3');
    audioRoarMonster.play();
}

hitButton.onclick = hitMonster;
roarButton.onclick = roarMonster;