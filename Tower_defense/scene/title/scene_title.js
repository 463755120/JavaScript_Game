class SceneTitle extends GameScene {
  constructor(game) {
    super(game);
    this.setup();
  }
  setup(game) {
    //初始敌人列表和塔列表
    this.enemies = []
    this.towers = []
    this.setupBG();
    this.setupGameElements();
    //setupHUD
    this.setupHUD();
    this.setupTower();
    this.setupInputs();
  }
  addTowe(x,y){
    let tower1 = new Tower(this.game);
    tower1.x = x;
    tower1.y = y;
    this.addElement(tower1)
    this.towers.push(tower1);
  }
  setupTower(){
    this.addTowe(100,170)
    this.addTowe(100,30)
  }
  setupGameElements() {
    for(let i =0;i<10;i++){
      let e2 = new Enemy1(this.game);
      e2.x -= i*30;
      this.addElement(e2);
      this.enemies.push(e2)
    }
  }
  setupBG() {
    var bg = new GameImage(this.game, "bg");
    this.addElement(bg);
  }
  setupHUD() {
    let gun = new GameImage(this.game, "m1");
    gun.x = 280;
    gun.y = 180;
    this.gun = gun;
    this.addElement(gun);
  }
  draw() {
    super.draw();
  }
  update() {
    super.update();
    for(let t of this.towers){
        if(t.target == null){
            t.findTarget(this.enemies)
        }
    }
  }

  setupInputs() {
    //mouse event
    let self = this;
    let startDrag = false;
    this.game.registerMouse((event, status) => {
      let x = event.offsetX;
      let y = event.offsetY;
      if (status == "down") {
        let cliicked = this.gun.pointInframe(x, y);
        if (cliicked) {
          startDrag = true;
          self.tower = self.gun.clone();
          self.addElement(self.tower);
        }
      } else if (status == "move") {
        self.gun.x = x;
        self.gun.y = y;
      } else {
        startDrag = false;
        self.removeElement(self.tower);
      }
    });
    var b = this.mario;
    let playerSpeed = 5;
  }
}