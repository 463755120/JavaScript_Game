class Peashooter extends Gnameanimation {
    static new(game) {
      let animationPeashooter = {
        name: "Peashooter",
        pathFormat: "./img/[name]/Peashooter_[name]_[index].png",
        actions: [{
            name: "idle",
            numberOfFrames: 12
          },
        ]
      };
     
      let p =  new this(game,animationPeashooter)
      p.setup()
      return p
    }
    setup() {
      this.cooldowm = 50
    }
    fire(){
      this.cooldowm --
      if(this.cooldowm ==0){
        this.cooldowm =50
         let pb =new  PeaBullet(this.game,'peabullet1')
         pb.x = this.x +35
         pb.y = this.y
         this.game.scene.addElement(pb)
      }
    }
    update(){
      super.update()
      this.fire()
    }
  }
  