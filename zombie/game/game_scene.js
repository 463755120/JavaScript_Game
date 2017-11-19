class GameScene{
    constructor(game){
        this.game = game
        this.elements = []
    }
    addElement(gameImage){
        //gameImage的一个属性可以得到GameScene(父类)
        gameImage.gameScene = this
        this.elements.push(gameImage)
    }
    removeElement(node) { 
      this.elements =  this.elements.filter(e=>{
          return e != node
       })
    }
    //把数组elements里所有的元素画出来。父类替子类完成
    draw(){
        for(var e of this.elements){
            e.draw()
        }
    }
    //每一次fps都执行的函数
    update(){
        for(var i = 0;i<this.elements.length;i++){
            var e = this.elements[i]
            e.update()
        }
    }
}