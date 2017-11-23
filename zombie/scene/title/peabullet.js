class PeaBullet extends GameImage{
    constructor(game,name){
        super(game,name)
        this.damage = 1
        this.speed = 3
    }
    update(){
        this.x +=this.speed
    }
}