console.log("JavaScript Object Oriented Programming (OOP)");

let newStarship;

document.getElementById("generate-starship").addEventListener("click", () => {
  console.log("generate starship");

  newStarship = new Starship();
});

function moveSpaceship() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      newStarship.moveUp();
    } else if (event.key === "ArrowDown") {
      newStarship.moveDown();
    } else if (event.key === "ArrowLeft") {
      newStarship.moveLeft();
    } else if (event.key === "ArrowRight") {
      newStarship.moveRight();
    }
  });
}
moveSpaceship();
