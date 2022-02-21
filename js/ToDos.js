import { Modals } from "./Modals";

const ToDo = (title, description, dueDate, dateValue) => {
  return { title, description, dueDate, dateValue };
};

const ToDoPage = (() => {
  let updateTaskForm = document.querySelector("#updatetask-form-container");
  let taskForm = document.querySelector("#task-form-container");
  let exitTaskBtn = document.querySelector(".exit-task-form");
  let exitUpdateTaskBtn = document.querySelector(".exit-updatetask-form");
  // CREATE EMPTY ARRAY WHERE WE WILL PUSH OUR NEW TASKS
  let allTasksArr = [];

  let currentlySelectedTask = undefined;

  if (localStorage.getItem("mytasks") !== null) {
    allTasksArr = JSON.parse(localStorage.getItem("mytasks"));
  }
  let pageBodyContent = document.querySelector("#main-content");

  function TaskFormSubmit(e) {
    e.preventDefault();

    TaskListHandler.createTask();

    PaintTaskPage();

    Modals.exitModal(taskForm, "noshow-task-modal");
  }

  function UpdateTaskFormSubmit(e) {
    e.preventDefault();

    TaskListHandler.updateTask(currentlySelectedTask);

    PaintTaskPage();

    Modals.exitModal(updateTaskForm, "noshow-updatetask-modal");
  }

  function PaintTaskPage() {
    pageBodyContent.innerHTML = "";

    exitTaskBtn.addEventListener("click", () => {
      Modals.exitModal(taskForm, "noshow-task-modal");
    });

    exitUpdateTaskBtn.addEventListener("click", () => {
      Modals.exitModal(updateTaskForm, "noshow-updatetask-modal");
    });

    let toDoContent = document.createElement("div");
    toDoContent.classList.add("to-do-content");
    let toDoHeader = document.createElement("h1");
    toDoHeader.innerHTML = "My To-Do List";

    toDoContent.appendChild(toDoHeader);

    let addTaskBtn = document.createElement("button");
    addTaskBtn.innerHTML = "Add To-Do";
    addTaskBtn.classList.add("add-task");
    addTaskBtn.addEventListener("click", () => {
      Modals.showModal(taskForm, "noshow-task-modal");
    });

    toDoContent.appendChild(addTaskBtn);

    let tasksSection = document.createElement("section");
    tasksSection.classList.add("task-section");

    toDoContent.appendChild(tasksSection);

    let tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    let num = 0;
    if (allTasksArr.length > 0) {
      allTasksArr.forEach((task) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");

        let taskHead = document.createElement("h4");
        taskHead.classList.add("task-title");
        taskHead.textContent = `${task.title}:`;

        let taskDesc = document.createElement("p");
        taskDesc.classList.add("task-description");
        taskDesc.textContent = task.description;

        let taskDue = document.createElement("button");
        taskDue.classList.add("task-due");
        taskDue.textContent = `Due: ${task.dueDate}`;

        let taskBtns = document.createElement("div");
        taskBtns.classList.add("task-btns-container");

        let taskEditBtn = document.createElement("i");
        taskEditBtn.classList.add("fas", "fa-edit", "task-edit");
        taskEditBtn.dataset.taskid = num;
        taskEditBtn.addEventListener("click", (e) => {
          Modals.showModal(updateTaskForm, "noshow-updatetask-modal");

          currentlySelectedTask = e;

          let upTitle = document.querySelector("#updatetasktitle");
          let upDue = document.querySelector("#updatetaskdue");
          let upDescription = document.querySelector("#updatetaskdescription");

          let curTask =
            ToDoPage.allTasksArr[currentlySelectedTask.target.dataset.taskid];

          upTitle.value = curTask.title;
          upDue.value = curTask.dateValue;
          upDescription.value = curTask.description;
        });

        let taskDeleteBtn = document.createElement("i");
        taskDeleteBtn.classList.add("fas", "fa-trash-alt", "task-delete");
        taskDeleteBtn.dataset.taskid = num;
        taskDeleteBtn.addEventListener("click", (e) => {
          TaskListHandler.deleteTask(e);
        });

        taskBtns.appendChild(taskEditBtn);
        taskBtns.appendChild(taskDeleteBtn);

        taskDiv.appendChild(taskHead);
        taskDiv.appendChild(taskDesc);
        taskDiv.appendChild(taskDue);
        taskDiv.appendChild(taskBtns);

        tasksContainer.appendChild(taskDiv);

        num++;
      });
    } else {
      let tempContent = document.createElement("div");
      tempContent.classList.add("temp-content");

      let tempHeader = document.createElement("h2");
      tempHeader.classList.add("temp-header");
      tempHeader.textContent = "To-Do List Items Will Go Here";

      tempContent.appendChild(tempHeader);

      tasksContainer.appendChild(tempContent);
    }

    tasksSection.appendChild(tasksContainer);

    taskForm.addEventListener("submit", TaskFormSubmit);

    updateTaskForm.addEventListener("submit", UpdateTaskFormSubmit);

    pageBodyContent.appendChild(toDoContent);
  }

  return { allTasksArr, PaintTaskPage };
})();

const TaskListHandler = (() => {
  let newTask;
  function createTask() {
    newTask = "";

    let taskTitle;
    let taskDueDate;
    let taskDescription;
    let dateValue;

    taskTitle = document.querySelector("#tasktitle");
    taskDueDate = document.querySelector("#taskdue");
    taskDescription = document.querySelector("#taskdescription");

    dateValue = taskDueDate.value;

    let dueArr = taskDueDate.value.split("-");

    let dDate = new Date(`${dueArr[0]},${dueArr[1]},${dueArr[2]},`).toString();

    dDate = dDate.split(" ");

    let cardDD = `${dDate[0]} ${dDate[1]} ${dDate[2]}`;

    newTask = ToDo(taskTitle.value, taskDescription.value, cardDD, dateValue);

    ToDoPage.allTasksArr.push(newTask);

    addTasksToStorage(ToDoPage.allTasksArr);
    // CLEAR INPUTS
    taskTitle.value = "";
    taskDueDate.value = "";
    taskDescription.value = "";
  }

  function addTasksToStorage(tasks) {
    localStorage.setItem("mytasks", JSON.stringify(tasks));
  }

  function deleteTask(e) {
    let selectedTask = e.target.dataset.taskid;

    ToDoPage.allTasksArr.splice(parseInt(selectedTask), 1);

    addTasksToStorage(ToDoPage.allTasksArr);
    ToDoPage.PaintTaskPage();
  }

  function updateTask(e) {
    let selectedTask = e.target.dataset.taskid;

    let upTitle = document.querySelector("#updatetasktitle");
    let upDue = document.querySelector("#updatetaskdue");
    let upDescription = document.querySelector("#updatetaskdescription");

    let upTask = ToDoPage.allTasksArr[selectedTask];

    let dueArr = upDue.value.split("-");

    let dDate = new Date(`${dueArr[0]},${dueArr[1]},${dueArr[2]},`).toString();

    dDate = dDate.split(" ");

    let cardDD = `${dDate[0]} ${dDate[1]} ${dDate[2]}`;

    upTask.title = upTitle.value;
    upTask.dueDate = cardDD;
    upTask.description = upDescription.value;

    addTasksToStorage(ToDoPage.allTasksArr);

    upTitle.value = "";
    upDue.value = "";
    upDescription.value = "";
  }

  return { createTask, addTasksToStorage, deleteTask, updateTask };
})();

export { ToDoPage };
