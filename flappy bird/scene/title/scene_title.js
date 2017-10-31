class SceneTitle extends GameScene{
    constructor (game){
        super(game)
        // var label = new GameLabl(game,'hello')
        // this.addElement(label)
        //bg
        var bg = new GameImage(game,'bg')
        this.addElement(bg)
        //地板
        this.grounds =[]
        for(var i=0;i<40;i++){
            var g = new GameImage(game,'base')
            g.x = i*14;
            g.y = 340;
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipGrund = 4;
        //鸟
        var bird = new Gnameanimation(game)
        bird.x = 100
        bird.y = 80
        this.bird = bird
        this.addElement(bird)
        this.setupInputs()
    }
    draw(){
      super.draw()
    }
    update(){
        super.update()
        this.skipGrund --
        var offset = -3;
        if(this.skipGrund ==0){
            this.skipGrund = 4;
            offset = 9;

        }
        for(var i=0;i<40;i++){
            var g = this.grounds[i]
            g.x +=offset;
            
        }
    }
    setupInputs(){
        var self = this
        var b = this.bird;
        self.game.registerAction('j', function(status) {
            b.jump()
        })
        self.game.registerAction('a', function(status) {
            b.move(-2,status)
        })
        self.game.registerAction('d', function(status) {
            b.move(+2,status)
        })
    }

}