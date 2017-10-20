class GameLabl {
    constructor(game,text){
        this.game = game
        this.text = text
    }
    draw(){
        this.game.context.fillText(this.text,100,100)
    }
    update(){

    }
}
class GameParticle extends GameImage{
    constructor(game){
        super(game,'fire')
        this.setup()
    }
    setup(){
        this.life = 10
    }
    init(x,y,vx,vy){
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update(){
        this.life--
        this.x +=this.vx
        this.y +=this.vy
        var factor = 0.01
        this.vx +=factor * this.vx 
        this.vy +=factor * this.vy 
    }
    
}
class GameparticalSystem {
    constructor(game){
        this.game = game
        this.setup()
    }
    setup(){
        this.duration = 1000
        this.x = 150
        this.y = 200
        this.numberofpartcles = 30
        this.partciacles = []
    }
    draw(){
        for(var p of this.partciacles){
            p.draw()
        }
    }
    update(){
        //火花结束
        this.numberofpartcles-- 

        //添加小火花
        if(this.partciacles.length < this.numberofpartcles){
            var p = new GameParticle(this.game)
            //设置初始坐标
            var vx = randomBetween(-10,10)
            var vy = randomBetween(-10,10)
            p.init(this.x,this.y,vx,vy)
            this.partciacles.push(p)
        }
        //更新所有的小火花
        for(var p of this.partciacles){           
            p.update()
        }
        //删除逝去的火花
        this.partciacles = this.partciacles.filter(p=>(p.life >0))
    }
}
class SceneTitle extends GameScene{
    constructor (game){
        super(game)
        // game.registerAction('k', function() {
        //     var s = Scene(game)
        //     game.replaceScene(s)
        // }) 
        var label = new GameLabl(game,'hello')
        this.addElement(label)

        var ps = new GameparticalSystem(game)
        this.addElement(ps)
    }
    draw(){
       super.draw()
    }

}