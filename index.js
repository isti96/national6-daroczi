console.log("Homework");

let taskList = [];
let buttons = [];
let randomList = {};
let checkBoxes = [];
const user = "idaroczi";
const addButton = document
  .getElementById("addButton")
  .addEventListener("click", addData);

fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`)
  .then((r) => r.json())
  .then(useJSONResponse)
  .catch(() => {});

function useJSONResponse(json) {
  randomList = json;

  if (Object.keys(randomList).length != 0) {
    taskList = json.todo;
  }

  renderToDoList(json);
}

const taskListHtml = document.getElementById("task-list");

function addData() {
  const inputBoxValue = document.getElementById("inputbox");
  const taskName = inputBoxValue.value;

  let obj = {
    checked: false,
    item: taskName,
  };
  taskList.push(obj);
  const payload = {
    id: user,
    todo: taskList,
  };

  if (Object.keys(randomList).length === 0) {
    fetch("https://simple-json-server-scit.herokuapp.com/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } else {
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }
  addNewTask(obj, taskList.length - 1);
  inputBoxValue.value = "";
}

function addNewTask(taskObj, i) {
  const task = document.createElement("div");
  const checkedBox = document.createElement("input");
  const taskNameTag = document.createElement("p");
  const removeButton = document.createElement("img");

  checkedBox.addEventListener("change", function () {
    taskList[i].checked = this.checked;
    checkBoxes.splice(i, 1);
    const payload = {
      id: user,
      todo: taskList,
    };

    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  });

  removeButton.addEventListener("click", function () {
    taskList.splice(i, 1);
    buttons.splice(i, 1);

    const payload = {
      id: user,
      todo: taskList,
    };
    const currentTask = taskListHtml.childNodes[i];
    currentTask.parentNode.removeChild(currentTask);

    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  });
  buttons.push(removeButton);
  checkBoxes.push(checkedBox);

  checkedBox.type = "checkbox";
  checkedBox.className = "checkBoxClass";
  checkedBox.style.marginTop = "18px";
  checkedBox.style.marginBottom = "16px";
  taskNameTag.style.marginLeft = "10px";

  removeButton.type = "img";
  task.className = "task-item";
  taskNameTag.className = "taskNameTagClass";

  removeButton.className = "removeButtonClass";

  removeButton.setAttribute(
    "src",
    "https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg"
  );

  taskNameTag.innerText = taskObj.item;
  checkedBox.checked = taskObj.checked;

  task.appendChild(checkedBox);
  task.appendChild(taskNameTag);
  task.appendChild(removeButton);
  taskListHtml.appendChild(task);
}

function getData() {
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`)
    .then((r) => r.json())
    .then(renderToDoList)
    .catch(() => {});
}

function renderToDoList(response) {
  for (let i = 0; i < response.todo.length; i++) {
    addNewTask(response.todo[i], i);
  }
}
