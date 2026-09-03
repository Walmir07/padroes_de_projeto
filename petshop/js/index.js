let soundManager = new SoundManager();
let interfaceManager = new InterfaceManager();
let dog = new Dog();

function hitDog(){

    
    dog.receiveDamage(100);

    interfaceManager.updateDogLifeBar(dog.life);

    if(dog.life == 0 && dog.isDead){
        
        
        soundManager.deathAudio.play();

        isDead = true
        interfaceManager.setDeadDogFace();
    } else if (!dog.isDead) {
        
        soundManager.hitAudio.play();

        interfaceManager.setHitDogFace();
        setTimeout(backDogFaceToNormal, 250);
    } 

}

function backDogFaceToNormal(){
    interfaceManager.setHappyDogFace();
}

hitButton.onclick = hitDog;