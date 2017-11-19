class SceneTitle extends GameScene {
  constructor(game) {
    super(game);
    this.setup();
  }
  setup(game) {
    let zombie = Zombie.new(this.game);
    zombie.x = 200;
    zombie.y = 200
    this.addElement(zombie)
  }
}
