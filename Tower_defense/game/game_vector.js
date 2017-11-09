class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance(vector) {
      let v = vector
      let dx = v.x-this.x
      let dy = v.x - this.y
      return Math.sqrt(dx*dx+dy*dy)
  }
}