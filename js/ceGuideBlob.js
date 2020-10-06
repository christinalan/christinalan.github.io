/*
 * 2017/10/25
 * Metaballs
 */

let num = 10;
// ArrayList<Particle> particles;
let Particle = [];
let particles;
let cellNum = 100;
let cellSize = 8;
let cells = [];

function setup() {
  createCanvas(800,800);
  cells = new let[cellNum + 1][cellNum + 1];
  particles = new Particle;
  for (let i = 0; i <num; i++) {
    particles.add(new Particle());
  }
}

function draw() {
  background(0, 0, 26);
  for (let y = 0; y < cellNum + 1; y++) {
    for (let x = 0; x < cellNum + 1; x++) {
      let c = new let(x * cellSize, y * cellSize);
      cells[x][y] = 0.0;
      for (let p of particles) {
        cells[x][y] += p.radius / let.sub(c, p.loc).mag();
      }
    }
  }
  for (let y = 0; y < cellNum; y++) {
    for (let x = 0; x < cellNum; x++) {
      let v = (cells[x][y] + cells[x +1][y] + cells[x][y + 1] + cells[x+1][y+1])/4.0;
      let alpha = map(v, 0.8, 1.2, 0, 255);
      noStroke();
      fill(255, 236, 230, alpha);
      rect(x*cellSize, y*cellSize, cellSize, cellSize, cellSize);
    }
  }
  for (let p of particles) {
    p.update();
  }
}

class Particle {
  constructor(radius, loc, vel) {
    this.radius = radius;
    this.loc = loc;
    this.vel = vel;
  }


  Particle() {
    radius = random(12, 24);
    loc = new let(random(radius, width - radius), random(radius, height - radius));
    let velSize = random(2, 8);
    let velAng = random(HALF_PI);
    vel = new let(velSize * cos(velAng), velSize*sin(velAng));
  }

  function update() {
    loc.add(vel);
    if (loc.x < radius) {
      vel.x *= -1;
      loc.x += vel.x;
    }
    if (loc.x >= width - radius) {
      vel.x *= -1;
      loc.x += vel.x;
    }
    if (loc.y < radius) {
      vel.y *= -1;
      loc.y += vel.y;
    }
    if (loc.y >= height - radius) {
      vel.y *= -1;
      loc.y += vel.y;
    }
  }
}
