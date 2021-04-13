import {
  imageBackward,
  imageForward,
  renderDogImages,
  renderDogList,
} from "./renderDogList";
import { getFirstData } from "./utils/api";

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

getFirstData(renderDogList, renderDogImages);

document.getElementById("backward").addEventListener("click", imageBackward);
document.getElementById("forward").addEventListener("click", imageForward);

// import { getApiPostData, getApiDataLS } from "./utils/api";
// import { updateLocalStorage } from "./updateLocalStorage";

// const breedImage = document.getElementById("breed-image");
// const pageNumber = document.getElementById("page-number");

// let current = document.getElementsByClassName("active");
// let j = 0;
// let dogImage = [];

// function renderDogList(response) {
//   const breeds = document.getElementById("breeds");
//   let breedsList;
//   breedsList = Object.keys(response.message);

//   for (let i = 0; i < breedsList.length; i++) {
//     let htmlElement = document.createElement("p");
//     htmlElement.classList.add("pointer");
//     htmlElement.innerText = breedsList[i];
//     breeds.appendChild(htmlElement);

//     if (
//       localStorage.getItem("index") &&
//       localStorage.getItem("breed") &&
//       breedsList[i] === localStorage.getItem("breed")
//     ) {
//       htmlElement.classList.add("active");
//       htmlElement.classList.add("pointer");

//       getApiDataLS(assignImages2);
//     }
//   }
// }

// function renderDogImages() {
//   let breedsListHtml = document.getElementById("breeds").childNodes;
//   for (let i = 0; i < breedsListHtml.length; i++) {
//     breedsListHtml[i].addEventListener("click", function () {
//       j = 0;
//       pageNumber.innerText = j + 1;

//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//       }
//       this.className += " active";

//       getApiPostData(breedsListHtml, i, assignImages);
//       updateLocalStorage(j, current[0].innerText);
//     });
//   }
// }

// function assignImages(dogs) {
//   dogImage = dogs.message;
//   breedImage.setAttribute("src", dogImage[j]);
// }

// function assignImages2(dogs) {
//   dogImage = dogs.message;
//   j = localStorage.getItem("index");
//   breedImage.setAttribute("src", dogImage[j]);
//   pageNumber.innerText = Number(localStorage.getItem("index")) + 1;
// }

// function imageForward() {
//   if (j < dogImage.length - 1) {
//     j++;
//     breedImage.setAttribute("src", dogImage[j]);
//     pageNumber.innerText = j + 1;
//     updateLocalStorage(j, current[0].innerText);
//   }
// }

// function imageBackward() {
//   if (pageNumber.innerText > 1) {
//     breedImage.setAttribute("src", dogImage[j - 1]);
//     pageNumber.innerText = j;
//     j--;
//     updateLocalStorage(j, current[0].innerText);
//   }
// }
