class InterfaceManager{

    constructor(){
        this.dogLifeBar = document.getElementById("dogLifeBar");
        this.dogFace = document.getElementById("dogFace");
    }

    updateDogLifeBar(life) {
        this.dogLifeBar.style.width = life + "px";
    }

    setHitDogFace() {
        this.dogFace.src = "/images/sad-dog.png";
    }

    setDeadDogFace() {
        this.dogFace.src = "/images/dead-dog.png";
    }

    setHappyDogFace() {
        this.dogFace.src = "/images/happy-dog.png";
    }

}