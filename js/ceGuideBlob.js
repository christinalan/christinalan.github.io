class Blob {
  PVector pos;
  float r;
  PVector vel;

  Blob(float x, float y) {
    pos = new PVector(x, y);
    vel = PVector.random2D();
    vel.mult(random(5, 10));
    r = random(8,15);
  }
  void update() {
    pos.add(vel);

    if (pos.x > width || pos.x < 0) {
      vel.x *= -1;
    }
    if (pos.y > height || pos.y < 0) {
      vel.y *= -1;
    }
  }
  void show() {
    noFill();
    noStroke();;
    ellipse(pos.x, pos.y, r*2, r*2);
  }
}

// class Blob {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.pos = createVector(this.x, this.y)
//     this.vel = p5.Vector.random2D();
//     v.setMag(random(5, 10));
//     this.r = r = random(8,15);
//   }
  
//   function update() {
//     pos.add(vel);

//     if (pos.x > width || pos.x < 0) {
//       vel.x *= -1;
//     }
//     if (pos.y > height || pos.y < 0) {
//       vel.y *= -1;
//     }
//   }
//   function show() {
//     noFill();
//     noStroke();;
//     ellipse(pos.x, pos.y, r*2, r*2);
//   }
// }
