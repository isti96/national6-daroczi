console.log("Homework");

const addButton = document
  .getElementById("addButton")
  .addEventListener("click", addData);

function addData() {
  const taskName = document.getElementById("inputbox").value;
  const payload = {
    id: "idaroczi",
    todo: [
      {
        checked: true,
        item: taskName,
      },
      {
        checked: false,
        item: taskName,
      },
    ],
  };

  fetch("https://simple-json-server-scit.herokuapp.com/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(getData);

  const task = document.createElement("div");
  const checkedBox = document.createElement("input");
  const taskNameTag = document.createElement("p");
  const removeButton = document.createElement("button");
  const inputField = document.getElementById("inputField");
  
  checkedBox.type = "checkbox";

  taskNameTag.innerHTML = taskName;
  task.className = "task";
  checkedBox.className = "checkBoxClass";
  taskNameTag.className = "taskNameClass";
  
  // removeButton.className = "removeButtonTag";
  removeButton.setAttribute("id", "removeButtonTag");

  //console.log(inputFieldValue);
  document.body.appendChild(task);
  task.appendChild(checkedBox);
  task.appendChild(taskNameTag);
  task.appendChild(removeButton);
  document.body.insertBefore(task, inputField);
  const removeButtonAction = document
    .getElementById("removeButtonTag")
    .addEventListener("click", updateData);
  function apad() {
    let a = 4;
    b = 5;

    return a + b;
  }
  //console.log(removeButtonAction);


}

function getData() {
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/idaroczi`)
    .then((response) => response.json())
    .then(renderToDoList)
    .catch(() => {});
}

function updateData() {
  const taskName = document.getElementById("inputbox").value;
  const payload = {
    id: "idaroczi",
    todo: [
      {
        checked: true,
        item: taskName,
      },
      {
        checked: false,
        item: taskName,
      },
    ],
  };
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/idaroczi`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(getData);
}



function renderToDoList() {
  console.log("csa");
}
