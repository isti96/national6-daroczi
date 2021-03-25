console.log("Starship generator");

var mySpaceships = new Array(
  "blue-spaceship.png",
  "red-spaceship.png",
  "green-spaceship.png"
);

class Starship {
  constructor() {
    this.generateHtmlRef();
    this.x = 0;
    this.y = 0;
    this.randomPicture();
  }

  randomPicture() {
    var randomNum = Math.floor(Math.random() * mySpaceships.length);
    this.ref.src = mySpaceships[randomNum];
  }

  generateHtmlRef() {
    this.ref = document.createElement("img");
    this.ref.classList.add("starship");
    document.getElementById("fat").appendChild(this.ref);
  }

  moveStarship(x, y) {
    this.x = x;
    this.y = y;
    this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  moveUp() {
    this.moveStarship(this.x, this.y - 25);
  }

  moveDown() {
    this.moveStarship(this.x, this.y + 25);
  }

  moveLeft() {
    this.moveStarship(this.x - 25, this.y);
  }

  moveRight() {
    this.moveStarship(this.x + 25, this.y);
  }
}
