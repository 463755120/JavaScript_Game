class Enemy1 extends GameImage {
  constructor(game, name) {
    name = name || "m2";
    super(game, name);
    this.tileSize = 0
    this.setup();
  }
  resetPath(path){
   let steps = []
   let s = this.tileSize
   for(let p of path){
     let c = [p.x*s,p.y*s]
    steps.push(c)
   }
   this.steps = steps
   this.setIndex = 0
  }
  setup() {
    this.setIndex = 0;
    this.steps = [];
    this.dead = false;
    this.x = 0
    this.y = 170;
    this.speed = 2;
    this.maxhp = 100;
    this.hp = 100;
    this.destination = 300;
  }
  drawLifebar() {
    let context = this.game.context;
    context.fillStyle = "red";
    let [x, y, w, h] = [this.x, this.y - 10, this.w, 10];
    context.fillRect(x, y, w, h);
    context.fillStyle = "green";
    let w1 = w * (this.hp / this.maxhp);
    context.fillRect(x, y, w1, h);
  }
  draw() {
    super.draw();
    this.drawLifebar();
  }
  update() {
    if (this.dead) {
      return;
    }
    let [dx, dy] = this.steps[this.setIndex];
    let signX = dx > this.x ? 1 : -1;
    let signY = dy > this.y ? 1 : -1;
    if(dx == this.x){
      signX =0
    }
    if(dy == this.y){
      signY =0
    }
    this.x += this.speed*signX
    this.y += this.speed *signY
    if (this.x == dx && this.y == dy) {
      this.setIndex++;
      if (this.setIndex == this.steps.length) {
        log("敌人走到终点");
        this.die();
      }
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
