let interfaceManager = new InterfaceManager();

function hitDog(){
    let dog = new Dog();
    let soundManager = new SoundManager();
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