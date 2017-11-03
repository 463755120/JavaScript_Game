class Bullet extends GameImage{
    constructor(game){
        super(game,'bullet')
        this.setup()
    }
    setup(){
        this.speed = config.bullet_speed
    }
    update(){
        this.y -=this.speed
    }
}
class Plyer extends GameImage{
    constructor(game){
        super(game,'player')
        this.setUp()
    }
    setUp(){
        this.speed = 10
        this.cooldown = 0
    }
    update(){
        this.speed = config.player_speed
        if(this.cooldown > 0){
            this.cooldown --
        }
    }
    fire(){
        if(this.cooldown == 0){
            this.cooldown = 3
            var x = this.x + this.x/2
            var y = this.y
            var b = new Bullet(this.game)
            b.x = x
            b.y = y
            this.gameScene.addElement(b)
        }       
    }
    moveLeft(){
        this.x -= this.speed
    }
    moveRight(){
        this.x += this.speed
    }
    moveDown(){
        this.y += this.speed
    }
    moveUp(){
        this.y -= this.speed
    }
}
class Enemy extends GameImage{
    constructor(game){    
        var type = randomBetween(0,1)        
        var name = 'enemy'+type
        super(game,name)   
        this.setUp()
    }
    setUp(){        
        this.speed = randomBetween(2,5)
        this.x = randomBetween(0,400)
        this.y = randomBetween(0,100)
    }
    update(){
        this.y += this.speed
        if(this.y>600){
            this.setUp()
        }
    }
}
class Cloud extends GameImage{
    constructor(game){    
        super(game,'cloud')   
        this.setUp()
    }
    setUp(){        
        this.speed = 1
        this.x = randomBetween(0,400)
        this.y = randomBetween(0,100)
    }
    update(){
        this.speed = config.cloud_speed
        this.y += this.speed
        if(this.y>600){
            //重新生成一遍
            this.setUp()
        }
    }
}
class Scene extends GameScene{
    constructor (game){
        super(game)
        this.setup()
        this.setupInput()
    }
    setup(){
        var game = this.game 
        //持续时间
        this.ruration = 50
        //敌机数量  
        this.numberOfEnemies = 3    
        this.bg = new GameImage(game,'sky')
        this.cloud = new Cloud(game)
        this.player = new Plyer(game)       
        this.player.x = 100
        this.player.y = 500
  
        this.addElement(this.bg)
        this.addElement(this.cloud)       
        
        //加载敌机
        this.addEnemies()
        //玩家
        this.addElement(this.player)
        //粒子爆炸
        var ps = new GameparticalSystem(game)
        this.addElement(ps)

    }
    addEnemies(){
        var es = []
        for(var i=0;i<this.numberOfEnemies;i++){
            var e = new Enemy(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.addEnemies = es
    }
    setupInput(){
        var g = this.game
        var s = this
        g.registerAction('a', function() {
            s.player.moveLeft()
        })
        g.registerAction('d', function() {
            s.player.moveRight()
        })
        g.registerAction('w', function() {
            s.player.moveUp()
        })
        g.registerAction('s', function() {
            s.player.moveDown()
        })
        g.registerAction('j', function() {
            s.player.fire()
        })
    }
    //不需要子类 draw 否则会覆盖父类的draw
    // draw(){
    //    this.game.drawImage(this.bg)
    //    this.game.drawImage(this.player)
    // }
    update (){
        //调用父类的update()
        super.update()
    }

}
