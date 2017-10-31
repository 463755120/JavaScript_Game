class SceneTitle extends GameScene{
    constructor (game){
        super(game)
        var label = new GameLabl(game,'hello')
        this.addElement(label)

        var w = new Gnameanimation(game)
        w.x = 100
        w.y = 80
        this.w = w
        this.addElement(w)
        this.setupInputs()
    }
    draw(){
       super.draw()
    }
    setupInputs(){
        var self = this
        self.game.registerAction('a', function(status) {
            self.w.move(-2,status)
        })
        self.game.registerAction('d', function(status) {
            self.w.move(+2,status)
        })
    }

}