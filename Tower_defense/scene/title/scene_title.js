class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        this.setup()

    }
    setup(game) {
        var bg = new GameImage(this.game, 'bg')
        this.addElement(bg)
        //
        let gun = new GameImage(this.game, 'm1')
        gun.x = 280
        gun.y = 180
        this.gun = gun
        this.addElement(gun)
        this.setupInputs()
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()

    }
    
    setupInputs() {
        //mouse event
        let self = this
        let startDrag = false
        this.game.registerMouse((event, status) => {
            let x = event.offsetX
            let y = event.offsetY          
            if (status =='down'){
                let cliicked = this.gun.pointInframe(x, y)
                if (cliicked){
                  startDrag = true
                  self.tower = self.gun.clone()
                  self.addElement(self.tower)
              }
            } else if (status == 'move'){
                self.gun.x = x
                self.gun.y = y
            }else{
                startDrag = false
                self.removeElement(self.tower)
               
            }
        })
        var b = this.mario;
        let playerSpeed = 5
    }

}