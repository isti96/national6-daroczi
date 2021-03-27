console.log("JavaScript Object Oriented Programming (OOP)");

let newStarship;
let starShipList = [];

document.getElementById("generate-starship").addEventListener("click", () => {
  console.log("generate starship");

  newStarship = new Starship();

  // Here is the select spaceship functionality.

  starShipList.push(newStarship);
  const i = starShipList.length - 1;
  document
    .getElementById("starShipPlace")
    .childNodes[i].addEventListener("click", () => {
      newStarship = starShipList[i];
    });

  //
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
