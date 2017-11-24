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
      //row表示在第几排
      this.row = -1
      this.cooldowm = 50
      this.sleep = true
    }
    awak(){
      this.sleep = false
    }
    fire(){
      //只有僵尸出现才打子弹
      if(this.sleep){
        return 
      }
      this.cooldowm --
      if(this.cooldowm ==0){
        this.cooldowm =50
         let pb =new  PeaBullet(this.game,'peabullet1')
         pb.x = this.x +35
         pb.y = this.y
         pb.row = this.row
         let s= this.game.scene
         s.addElement(pb)
         s.bullets.push(pb)
      }
    }
    update(){
      super.update()
      this.fire()
    }
  }
  