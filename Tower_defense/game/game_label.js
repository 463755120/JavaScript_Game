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