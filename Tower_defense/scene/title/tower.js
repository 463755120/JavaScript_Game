class Tower extends GameImage {
  constructor(game, name) {
    name = name || "m1";
    super(game, name);
    this.setup();
  }
  setup() {
    this.attact = 1;
    this.range = 50;
    this.target = null;
  }
  update() {
    if (this.canAttack(this.target)) {
      this.target.byAtack(this.attact);
      if(this.target.dead){
        this.target = null
      }
    }
  }
  canAttack(enemy){
    let e = enemy;
    let enemyExist = e !==null && !e.dead
    if (enemyExist){
      return this.center().distance(e.center()) < this.range;
    } else{
      return false
    }
  };
  findTarget(enemies) {
    for (let e of enemies) {
      if (this.canAttack(e)) {
        this.target = e
        break
      }
    }
  }
}
