class Dog {

    constructor() {
        this.name = "Bruce Twist"
        this.life = 500;
        this.isDead = false;
    }

    receiveDamage(damage) {
        this.life -= damage;
        this.life = Math.max(this.life, 0)
        this.isDead = this.life == 0;
    }

}
