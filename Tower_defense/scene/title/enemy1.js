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
    this.maxhp = 6
    this.hp = 6;
    this.destination = 300;
  }
  drawLifebar(){
    let context = this.game.context
    context.fillStyle = 'red'
    let [x,y,w,h] = [this.x,this.y-10,this.w,10]
    context.fillRect(x,y,w,h)
    context.fillStyle = 'green'
    let w1 = w*(this.hp/this.maxhp)
    context.fillRect(x,y,w1,h)

  }
  draw(){
    super.draw()
    this.drawLifebar()
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
