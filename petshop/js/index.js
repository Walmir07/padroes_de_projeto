let dogLife = 500;
let isDead = false;

function hitDog(){

    dogLife -= 100;
    dogLife = Math.max(dogLife, 0)
    dogLifeBar.style.width = dogLife + "px";

    if(dogLife == 0 && !isDead){
        let dogScreamAudio = new Audio('./audios/dog-death.mp3');
        dogScreamAudio.play();
        isDead = true
        dogFace.src = "./images/dead-dog.png";
    } else if (!isDead) {
        let screamAudio = new Audio('./audios/dog-hit.mp3'); 
        screamAudio.play();
        dogFace.src = "./images/sad-dog.png";
        setTimeout(backDogFaceToNormal, 250);
    } 

}

function backDogFaceToNormal(){
    dogFace.src = "./images/happy-dog.png";
}

hitButton.onclick = hitDog;