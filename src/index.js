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
