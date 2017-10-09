var SceneEnd = function(game){
    var s = {
        game:game,
    }
    s.draw = function(){
        game.context.fillText('游戏结束', 100, 290)
    }
    //这个空函数不可省略，因为game函数中有调用。
    s.update = function(){

    }
    return s
}