class GameScene{
    constructor(game){
        this.game = game
        this.elements = []
    }
    addElement(gameImage){
        this.elements.push(gameImage)
    }
    //把数组elements里所有的元素画出来。父类替子类完成
    draw(){
        for(var i = 0;i<this.elements.length;i++){
            var e = this.elements[i]
            this.game.drawImage(e)
        }
    }
    update(){

    }
}