console.log("Homework");


let taskList = [];
let buttons = [];
let retek = {};
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

  retek = json;

  if (Object.keys(retek).length != 0) {
    taskList = json.todo;
    
  }

  console.log(retek);
  renderToDoList(json);
}

const taskListHtml = document.getElementById("task-list");

function addData() {
  const taskName = document.getElementById("inputbox").value;
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
  console.log(retek);
  if (Object.keys(retek).length === 0) {
    //(retek === undefined || retek.length == 0) {

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
  addNewTask(obj, taskList.length-1);
}

function addNewTask(taskObj, i) {
  console.log(taskObj)
  const task = document.createElement("div");
  const checkedBox = document.createElement("input");
  const taskNameTag = document.createElement("p");
  const removeButton = document.createElement("button");


  checkedBox.addEventListener('change', function() {
    taskList[i].checked = this.checked; 

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
    }) 
  })
  
  console.log("Payload:", taskObj);
  removeButton.addEventListener("click", function () {
    // console.log(taskList[i]);
    taskList.splice(i, 1);

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
    }) 
    
    
  });
  buttons.push(removeButton);
  checkBoxes.push(checkedBox);
  console.log("Payload:", taskObj);
  checkedBox.type = "checkbox";
  checkedBox.className = "checkBoxClass";

  
  
  task.className = "task-item";
  taskNameTag.className = "taskNameTagClass";
  //removeButton.className = "removeButtonClass";
  removeButton.setAttribute("id", "removeButtonClass");
  //removeButton.setAttribute("href", "index.html");
  removeButton.innerText = "delete";
  taskNameTag.innerText = taskObj.item;
  checkedBox.checked = taskObj.checked;
  console.log("Payload:", taskObj);
  task.appendChild(checkedBox);
  task.appendChild(taskNameTag);
  task.appendChild(removeButton);
  taskListHtml.appendChild(task);
}

function getData() {
  let checkBox = document.getElementById("checkBoxClass");

  const taskName = document.getElementById("inputbox").value;

  fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`)
    .then((r) => r.json())
    .then(renderToDoList)
    .catch(() => {});
}

function renderToDoList(response) {
  console.log("ITEM:", response, "  ",response.todo.length);

  for (let i = 0; i < response.todo.length; i++) {
    console.log("*",response.todo[i]); 
    addNewTask(response.todo[i], i);
  }
}

function updateData(element) {
  const payload = {
    id: myId,
    todo: taskList,
  };

  console.log("Payload:", payload);
  console.log("Payload Text:", JSON.stringify(payload));

  console.log("szi");
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/${myId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(getData);
}
