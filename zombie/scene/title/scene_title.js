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
    let peashooter = Peashooter.new(this.game);
    window.z = peashooter
    peashooter.x = 50;
    peashooter.y = 200
    this.addElement(peashooter)
  }
  setupZombies() {
    let zombie = Zombie.new(this.game);
    window.z = zombie
    zombie.x = 200;
    zombie.y = 200
    this.addElement(zombie)
  }
}