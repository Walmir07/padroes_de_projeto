class Dog {

    //1){
    static myself;
    //}

    constructor() {
        //1) {
        if(Dog.myself) {
            return Dog.myself;
        }
        //}
        this.name = "Bruce Twist"
        this.life = 500;
        this.isDead = false;
        // 1){
        Dog.myself = this;
        //}
    }

    //1) {
    static instance() {
        if(!Dog.myself){
            return new Dog();
        }
        return Dog.myself;
    }
    //}

    receiveDamage(damage) {
        this.life -= damage;
        this.life = Math.max(this.life, 0)
        this.isDead = this.life == 0;
    }

}

/*Aplicando apenas o singleton(1)
    --> Para reconhecer quando um Dog já tiver sido criado
*/
