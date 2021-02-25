console.log("Javascript - Async programming");

document.addEventListener("click", onClick);

let counter = 0;
function onClick() {
    console.log('just a click in the app');
    counter++;
    console.log("counter:", counter);
}
console.log("counter:", counter);

// the function is an anonymous function
setTimeout(function() {
    console.log('this is a code ran after 2 seconds');
}, 2000);
console.log("after first setTimeout");

//this is similar to

setInterval(function() {
    console.log("ping");
}, 1000);
