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
  sub(vector){
    let v = vector
    let dx = this.x-v.x
    let dy = this.y-v.y
    return new Vector(dx,dy)
  }
  length(){
    return Math.sqrt(this.x*this.x+this.y*this.y)
  }
  normal(){
    let f = this.length()/1
    let v = new Vector(this.x/f,this.y/f)
    return v
  }
}