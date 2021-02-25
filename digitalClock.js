console.log("Javascript - Digital Clock");

let seconds = 0;
let minutes = 0;
let hours = 0;
const secondParagraphs = document.querySelectorAll(".seconds p");
const minuteParagraphs = document.querySelectorAll(".minutes p");
const hourParagraphs = document.querySelectorAll(".hours p");
console.log(secondParagraphs);
console.log(minuteParagraphs);

setInterval(function() {

    renderDigits(seconds, secondParagraphs)
    const secondsString = seconds + "";
    const secondsStringArray = secondsString.split('');
    console.log(secondsStringArray);

    if (secondsStringArray.length === 2) {
    secondParagraphs[0].innerText = secondsStringArray[0];
    secondParagraphs[1].innerText = secondsStringArray[1];
    } else {
        secondParagraphs[0].innerText = 0;
        secondParagraphs[1].innerText = secondsStringArray[0];
    }
    
    
    
    const minutesString = minutes + "";
    const minutesStringArray = minutesString.split(''); 
    
    console.log(minutesStringArray);

    if (minutesStringArray.length === 2) {
    minuteParagraphs[0].innerText = minutesStringArray[0];
    minuteParagraphs[1].innerText = minutesStringArray[1];
    } else {
        minuteParagraphs[0].innerText = 0;
        minuteParagraphs[1].innerText = minutesStringArray[0];
    }
    if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
            minutes = 0;
    
        } else 
        minutes++;
     } else {
         seconds++;
     }
    
    

  
        

}, 1000);

function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split(''); 
  
}