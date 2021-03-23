console.log("Homework");

let taskList = [];
let buttons = [];
let randomList = {};
let checkBoxes = [];
const myId = "idaroczi";

const addButton = document
  .getElementById("addButton")
  .addEventListener("click", addData);

console.log(taskList);

fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`)
  .then((r) => r.json())
  .then(useJSONResponse)
  .catch(() => {});

function useJSONResponse(json) {
  console.log(json);


  randomList  = json;

  if (Object.keys(randomList).length != 0) {
    taskList = json.todo;
  }

  
  renderToDoList(json);
}

const taskListHtml = document.getElementById("task-list");

function addData() {
  const inputBoxValue = document.getElementById("inputbox");
  const taskName = inputBoxValue.value;
  console.log(taskName);
  let obj = {
    checked: false,
    item: taskName,
  };
  taskList.push(obj);
  const payload = {
    id: myId,
    todo: taskList,
  };
  console.log("Payload:", payload);
  console.log("Payload Text:", JSON.stringify(payload));
  
  if (Object.keys(randomList).length === 0) {
    

    fetch("https://simple-json-server-scit.herokuapp.com/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } else {
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`, {
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
  console.log(taskObj);
  const task = document.createElement("div");
  const checkedBox = document.createElement("input");
  const taskNameTag = document.createElement("p");
  const removeButton = document.createElement("img");

  checkedBox.addEventListener("change", function () {
    taskList[i].checked = this.checked;
    checkBoxes.splice(i, 1);
    const payload = {
      id: myId,
      todo: taskList,
    };

    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  });

  console.log("Payload:", taskObj);
  removeButton.addEventListener("click", function () {
    // console.log(taskList[i]);
    taskList.splice(i, 1);
    buttons.splice(i, 1);
    for (let i = 0; i < buttons.length; i++) {
      console.log(buttons[i], i);
    }
    const payload = {
      id: myId,
      todo: taskList,
    };
    const currentTask = taskListHtml.childNodes[i];
    currentTask.parentNode.removeChild(currentTask);

    console.log("Payload:", payload);
    console.log("Payload Text:", JSON.stringify(payload));

    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  });
  buttons.push(removeButton);
  checkBoxes.push(checkedBox);
  console.log("Payload:", taskObj);
  checkedBox.type = "checkbox";
  checkedBox.className = "checkBoxClass";

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
  console.log("Payload:", taskObj);
  task.appendChild(checkedBox);
  task.appendChild(taskNameTag);
  task.appendChild(removeButton);
  taskListHtml.appendChild(task);
}

function getData() {
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`)
    .then((r) => r.json())
    .then(renderToDoList)
    .catch(() => {});
}

function renderToDoList(response) {
  console.log("ITEM:", response, "  ", response.todo.length);

  for (let i = 0; i < response.todo.length; i++) {
    console.log("*", response.todo[i]);
    addNewTask(response.todo[i], i);
  }
}

// function updateData(element) {
//   const payload = {
//     id: myId,
//     todo: taskList,
//   };

//   console.log("Payload:", payload);
//   console.log("Payload Text:", JSON.stringify(payload));

//   console.log("szi");
//   fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   }).then(getData);
// }
