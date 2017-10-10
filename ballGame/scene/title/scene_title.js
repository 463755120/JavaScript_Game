class SceneTitle extends GameScene{
    constructor (game){
        super(game)
        game.registerAction('k', function() {
            var s = Scene(game)
            game.replaceScene(s)
        }) 
    }
    draw(){
       this.game.context.fillText('按 k 游戏开始', 100, 190)
    }

}