// var SceneEnd = function(game){
//     var s = {
//         game:game,
//     }
//     game.registerAction('r',function(){
//         var s =  new SceneTitle(game)
//         game.replaceScene(s)
//     })
//     s.draw = function(){
//         game.context.fillText('游戏结束，按 r 回到开始界面', 100, 290)
//     }
//     //这个空函数不可省略，因为game函数中有调用。
//     s.update = function(){

//     }
//     return s
// }
class SceneEnd extends GameScene {
    constructor(game){
        super(game)
        game.registerAction('r',function(){
            var s =  new SceneTitle(game)
            game.replaceScene(s)
        })
    }
    draw(){
        this.game.context.fillText('游戏结束，按 r 回到开始界面', 100, 290)
    }
}