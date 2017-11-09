class Enemy1 extends GameImage {
  constructor(game, name) {
    name = name || "m2";
    super(game, name);
    this.setup();
  }
  setup() {
    this.dead = false;
    this.y = 100;
    this.speed = 3;
    this.hp = 3;
    this.destination = 300;
  }
  update() {
    if (this.dead) {
      log("我死了");
      return;
    }
    this.x += this.speed;
    if (this.x > this.destination) {
    }
  }
  byAtack(ad) {
    this.hp -= ad;
    if (this.hp <= 0) {
      this.die();
    }
  }
  die() {
    //先死亡texiao
    //再然后移除敌人数组
    this.dead = true;
    this.game.scene.removeElement(this);
  }
}
