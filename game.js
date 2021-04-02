console.log("OOP Game");

class GameObject {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 0;
    this.y = 0;
    this.generateRef();
  }

  generateRef() {
    this.ref = document.createElement("div");
    this.ref.style.width = `${this.width}px`;
    this.ref.style.height = `${this.height}px`;
    this.ref.style.position = "absolute";
    this.ref.style.top = 0;
    this.ref.style.left = 0;

    document.getElementById("game-scene").appendChild(this.ref);
  }

  move(x, y) {
    this.x = x;
    this.y = y;

    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  removeRef() {
    this.ref.remove();
  }
}

class Player extends GameObject {
  constructor() {
    super();

    this.ref.style.background = "blue";

    this.move(50, 225);
  }

  moveUp() {
    if (this.y - 25 >= 0) this.move(this.x, this.y - 25);
  }

  moveDown() {
    if (this.y + 25 <= 500 - this.height) this.move(this.x, this.y + 25);
  }
}

class Obstacle extends GameObject {
  constructor() {
    super();
    this.ref.style.background = "red";
    this.move(1060, 25);
    this.collide = false;
  }

  moveLeft() {
    this.move(this.x - 5, this.y);
  }
}

class ObstacleFactory {
  constructor() {
    this.obstacles = [];
  }

  createObstacle() {
    const obstacle = new Obstacle();
    obstacle.move(1060, Math.floor(Math.random() * 450));
    this.obstacles.push(obstacle);
  }

  destroyObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.x < -50) {
        obstacle.removeRef();
        return false;
      }

      return true;
    });
  }

  moveObstacles() {
    for (const obstacle of this.obstacles) {
      obstacle.moveLeft();
    }
  }
}
let ata = document.getElementById("lives");
class Lives {
  constructor(number) {
    this.generateLifeRef(number);
    this.number = number;
  }

  generateLifeRef(number) {
    for (let i = 0; i < number; i++) {
      this.ref = document.createElement("img");
      this.ref.style.width = "30px";
      this.ref.style.height = "30px";
      this.ref.src = "heart.png";

      ata.appendChild(this.ref);
    }
  }

  removeRef() {
    ata.removeChild(ata.lastChild);
    this.number--;
  }
}

let keyUpPress = false;
let keyDownPress = false;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = true;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyUpPress = false;
  }

  if (event.key === "ArrowDown") {
    keyDownPress = false;
  }
});

function collisionDetection(player, obstacles) {
  for (const obstacle of obstacles) {
    if (
      player.x < obstacle.x + obstacle.width &&
      player.x + player.width > obstacle.x &&
      player.y < obstacle.y + obstacle.height &&
      player.y + player.height > obstacle.y &&
      obstacle.collide === false
    ) {
      obstacle.collide = true;
      return true;
    }
  }

  return false;
}

const player = new Player();
const obstacleFactory = new ObstacleFactory();
let lives = new Lives(3);
console.log(lives);
console.log(lives.number);

let count = 0;

let gameLoop = setInterval(() => {
  if (keyUpPress) player.moveUp();
  if (keyDownPress) player.moveDown();

  if (count % 20 === 0) obstacleFactory.createObstacle();

  obstacleFactory.moveObstacles();

  if (collisionDetection(player, obstacleFactory.obstacles)) {
    lives.removeRef();
    console.log(lives);
    console.log(lives.number);
  }
  if (lives.number === 0) {
    alert("You lost");
    window.location = "/";
    clearInterval(gameLoop);
  }

  obstacleFactory.destroyObstacles();

  count++;
}, 50);
