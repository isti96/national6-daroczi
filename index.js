console.log("JavaScript - Dogs App");

const breedImage = document.getElementById("breed-image");
const pageNumber = document.getElementById("page-number");
let j = 1;
let dogImage = [];
let breedsList;

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

getData();

function getData() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(handleFetchResponse)
    .then(useJSONResponse)
    .then(atuka);
}

function handleFetchResponse(response) {
  return response.json();
}

function useJSONResponse(json) {
  renderDogList(json);
}

function renderDogList(ata) {
  const breeds = document.getElementById("breeds");
  breedsList = Object.keys(ata.message);

  for (let i = 0; i < breedsList.length; i++) {
    let htmlElement = document.createElement("p");
    htmlElement.innerText = breedsList[i];
    breeds.appendChild(htmlElement);
  }
}

function atuka() {
  let anett = document.getElementById("breeds").childNodes;

  for (let i = 0; i < anett.length; i++) {
    anett[i].addEventListener("click", function () {
      j = 1;

      pageNumber.innerText = j;
      let current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      this.className += " active";

      fetch(`https://dog.ceo/api/breed/${anett[i].innerText}/images`)
        .then(handleFetchResponse)
        .then(useJSONResponseAnett);
    });
  }
}
function useJSONResponseAnett(jsonAnett) {
  renderDogImages(jsonAnett);
}

function renderDogImages(dogs) {
  dogImage = dogs.message;
  breedImage.setAttribute("src", dogImage[0]);
  document.getElementById("forward").addEventListener("click", kutya);
}

function kutya() {
  if (j < dogImage.length) {
    breedImage.setAttribute("src", dogImage[j]);
    pageNumber.innerText = j + 1;
    j++;
  }
}

document.getElementById("backward").addEventListener("click", antikutya);

function antikutya() {
  if (j > 1) {
    j--;
    breedImage.setAttribute("src", dogImage[j - 1]);
    pageNumber.innerText = j;
  }
}
