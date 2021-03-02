console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

document.getElementById("start").addEventListener("click", startFunction);
document.getElementById("stop").addEventListener("click", stopFunction);
document.getElementById("reset").addEventListener("click", resetFunction);
document.getElementById("save").addEventListener("click", saveFunction);

var result;
var g = "";
function badumts() {
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);
 // console.log(hours, ":", minutes, ":", seconds);
  //console.log(document.getElementsByClassName("digital-clock").innerText);
  seconds++;
 // g = renderDigits(hours, hoursParagraphs) + ":" + renderDigits(minutes, minutesParagraphs) + ":" + renderDigits(seconds, secondsParagraphs);
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
   minutes = 0;
   hours++;
  }

  if (hours === 24) {
   hours = 0;
  }
  


  
  
};

var result = null;

function startFunction() {
  
result = setInterval(badumts, 100);



}

function stopFunction() {
  if (result) {
 clearInterval(result);
  };
};


function resetFunction() {
  
  seconds = 0;
  minutes = 0;
  hours = 0;

  secondsParagraphs[0].innerHTML = 0;
  secondsParagraphs[1].innerHTML = 0;
  minutesParagraphs[0].innerHTML = 0;
  minutesParagraphs[1].innerHTML = 0;
  hoursParagraphs[0].innerHTML = 0;
  hoursParagraphs[1].innerHTML = 0;
  clearInterval(result);
}

function saveFunction() {

  var para = document.createElement("div");
  
 // var ata = document.getElementsByClassName("digital-clock");
  var result = document.getElementsByClassName("digital-clock")[0].innerText;
  para.innerHTML = result;
  //ata.appendChild(para);
  document.body.appendChild(para);
};


function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}
