console.log("JavaScript - Dogs App");

const breedImage = document.getElementById("breed-image");
const pageNumber = document.getElementById("page-number");
let breedsListHtml = document.getElementById("breeds").childNodes;
let current = document.getElementsByClassName("active");
let j = 0;
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
    .then(renderDogImages);
}

function handleFetchResponse(response) {
  return response.json();
}

function useJSONResponse(json) {
  renderDogList(json);
}

function renderDogList(respRender) {
  const breeds = document.getElementById("breeds");
  breedsList = Object.keys(respRender.message);
  console.log(breedsList);

  for (let i = 0; i < breedsList.length; i++) {
    let htmlElement = document.createElement("p");
    htmlElement.innerText = breedsList[i];
    breeds.appendChild(htmlElement);

    if (
      localStorage.getItem("index") &&
      localStorage.getItem("breed") &&
      breedsList[i] === localStorage.getItem("breed")
    ) {
      htmlElement.className = " active";

      fetch(`https://dog.ceo/api/breed/${localStorage.getItem("breed")}/images`)
        .then(handleFetchResponse)
        .then(useJSONResponseLS);
    }
  }
}

function renderDogImages() {
  for (let i = 0; i < breedsListHtml.length; i++) {
    breedsListHtml[i].addEventListener("click", function () {
      j = 0;

      pageNumber.innerText = j + 1;

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      console.log(current[0].innerText);

      fetch(`https://dog.ceo/api/breed/${breedsListHtml[i].innerText}/images`)
        .then(handleFetchResponse)
        .then(useJSONResponseImages);
      updateLocalStorage();
    });
  }
}
function useJSONResponseImages(jsonImages) {
  assignImages(jsonImages);
}

function assignImages(dogs) {
  dogImage = dogs.message;

  breedImage.setAttribute("src", dogImage[j]);
}

document.getElementById("forward").addEventListener("click", imageForward);

function imageForward() {
  if (j < dogImage.length - 1) {
    j++;
    breedImage.setAttribute("src", dogImage[j]);
    pageNumber.innerText = j + 1;
    updateLocalStorage();
  }
}

document.getElementById("backward").addEventListener("click", imageBackward);

function imageBackward() {
  if (pageNumber.innerText > 1) {
    
    breedImage.setAttribute("src", dogImage[j - 1]);
    pageNumber.innerText = j;
    j--;
    updateLocalStorage();
  }
}

function updateLocalStorage() {
  localStorage.setItem("index", j);
  localStorage.setItem("breed", current[0].innerText);
}

function useJSONResponseLS(jsonImages) {
  assignImages2(jsonImages);
}

function assignImages2(dogs) {
  dogImage = dogs.message;
  j = localStorage.getItem("index");
  breedImage.setAttribute("src", dogImage[j]);
  pageNumber.innerText = Number(localStorage.getItem("index")) + 1;
  
}
