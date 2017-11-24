class SceneTitle extends GameScene {
  constructor(game) {
    super(game);

    this.setup();
  }
  setup(game) {
    this.plants = []
    this.zombies = []
    this.bullets = []
    //僵尸固定的位置
    this.offsetY = 100
    this.offsetX = 255
    this.heightOfRow = 100
    this.widthOfColumn = 80
    this.zombieOffsetY = 30
    this.setupBG()
    this.setupZombies()
    this.setupPeashooter()
  }
  setupBG() {
    let bg = new GameImage(this.game, 'bg1')
    this.addElement(bg)
  }
  setupPeashooter() {
    for (var j = 0; j < 1; j++) {
      for (let i = 0; i < 5; i++) {
        let p = Peashooter.new(this.game)
        this.addPlant(p, i, j)
      }
    }
  }
  addPlant(plant, row, column) {
    let peashooter = plant
    peashooter.x = this.offsetX + column * this.widthOfColumn
    peashooter.y = this.offsetY + row * this.heightOfRow
    peashooter.row = row
    this.addElement(peashooter)
    this.plants.push(peashooter)
  }
  //row表示第几行有僵尸
  addZombies(row) {
    let zombie = Zombie.new(this.game);
    window.z = zombie
    zombie.x = 600;
    zombie.y = this.zombieOffsetY + row * this.heightOfRow
    zombie.row = row
    this.addElement(zombie)
    this.zombies.push(zombie)
  }
  setupZombies() {
    this.addZombies(1)
    this.addZombies(3)
  }
  updateFire() {
    for (let z of this.zombies) {
      let row = z.row
      for (let p of this.plants) {
        if (p.row == row) {
          p.awak()
        }
      }
    }
  }
  updateHit() {
    for (let z of this.zombies) {
      let row = z.row
      for (let b of this.bullets) {
        if (b.row == row) {
         //判断是否相撞
         if(z.x-b.x<2){
          b.x = 10000
         }
        }
      }
    }
  }
  update() {
    super.update()
    this.updateFire()
    this.updateHit()
  }
}