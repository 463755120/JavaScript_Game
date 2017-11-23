class SceneTitle extends GameScene {
  constructor(game) {
    super(game);

    this.setup();
  }
  setup(game) {
    this.setupBG()
    this.setupZombies()
    this.setupPeashooter()
  }
  setupBG(){
    let bg = new GameImage (this.game,'bg1')
    this.addElement(bg)
  }
  setupPeashooter() {
    for(let i=0;i<2;i++){
      let peashooter = Peashooter.new(this.game);
      window.p = peashooter
      peashooter.x = 350;
      peashooter.y = 200+ i*100
      this.addElement(peashooter)
    }
  }
  setupZombies() {
    let zombie = Zombie.new(this.game);
    window.z = zombie
    zombie.x = 1200;
    zombie.y = 200
    this.addElement(zombie)
  }
  update(){
    super.update()
    z.x -=0.8;
  }
}