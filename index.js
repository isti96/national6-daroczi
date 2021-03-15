console.log("Homework");

const addButton = document.getElementById("addButton").addEventListener("click", addData)
function addData() {
  fetch("https://simple-json-server-scit.herokuapp.com/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(getData);
}

function getData() {
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/${idaroczi}`)
    .then((response) => response.json())
    .then(renderToDoList)
    .catch(() => {});
}

function updateData() {
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/${idaroczi}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(getData);
}

const payload = {
    id: "idaroczi",
    todo:[
      {
        checked: true,
        item: "task1"
      },
     {
        checked: false,
        item: "task2"
      },
   ]
}

function renderToDoList() {

    



console.log("csa");

}
const checkedBox = document.createElement("input");
const inputField = document.getElementById('inputField');
    checkedBox.type = "checkbox";
    
    document.body.insertBefore(checkedBox, inputField );