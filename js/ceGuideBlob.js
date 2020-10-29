class Dancer {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, 2 * PI);
    this.xspeed = random(0, 3) * Math.cos(angle);
    this.yspeed = random(0, 3) * Math.sin(angle);
    this.r = random(0, 100);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width || this.x < 0) this.xspeed *= -1;
    if (this.y > height || this.y < 0) this.yspeed *= -1;
  }

  show() {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r * 5, this.r * 3);
  }
}