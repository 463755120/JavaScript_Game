class PeaBullet extends GameImage{
    constructor(game,name){
        super(game,name)
        this.damage = 1
        this.speed = 3
        //子弹在第几行
        this.row = -1
    }
    update(){
        this.x +=this.speed
    }
}