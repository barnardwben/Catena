const TodayPage = (() => {
  let pageBodyContent = document.querySelector("#main-content");
  function PaintTodaysPage() {
    pageBodyContent.innerHTML = "";
    let todaysListArr = [];

    if (localStorage.getItem("mytasks") !== null) {
      todaysListArr = JSON.parse(localStorage.getItem("mytasks"));
    }

    let todaysDate = new Date().toString();

    todaysDate = todaysDate.split(" ");

    todaysDate = `${todaysDate[0]} ${todaysDate[1]} ${todaysDate[2]}`;

    let todayContent = document.createElement("div");
    todayContent.classList.add("today-section-content");

    let todayHeader = document.createElement("h1");
    todayHeader.innerHTML = "Today's To-Do List Items";

    todayContent.appendChild(todayHeader);

    let todayListSection = document.createElement("section");
    todayListSection.classList.add("tlist-section");
    todayContent.appendChild(todayListSection);

    let todayListContainer = document.createElement("div");
    todayListContainer.classList.add("tlist-container");

    todayListSection.appendChild(todayListContainer);
    let num = 0;
    if (todaysListArr.length > 0) {
      todaysListArr.forEach((item) => {
        if (item.dueDate === todaysDate) {
          let taskDiv = document.createElement("div");
          taskDiv.classList.add("task-div");

          let taskHead = document.createElement("h4");
          taskHead.classList.add("task-title");
          taskHead.textContent = `${item.title}:`;

          let taskDesc = document.createElement("p");
          taskDesc.classList.add("task-description");
          taskDesc.textContent = item.description;

          let taskDue = document.createElement("button");
          taskDue.classList.add("task-due");
          taskDue.textContent = `Due: ${item.dueDate}`;

          // let taskBtns = document.createElement("div");
          // taskBtns.classList.add("task-btns-container");

          // let taskEditBtn = document.createElement("i");
          // taskEditBtn.classList.add("fas", "fa-edit", "task-edit");
          // taskEditBtn.dataset.taskid = num;

          // let taskDeleteBtn = document.createElement("i");
          // taskDeleteBtn.classList.add("fas", "fa-trash-alt", "task-delete");
          // taskDeleteBtn.dataset.taskid = num;

          // taskBtns.appendChild(taskEditBtn);
          // taskBtns.appendChild(taskDeleteBtn);

          taskDiv.appendChild(taskHead);
          taskDiv.appendChild(taskDesc);
          taskDiv.appendChild(taskDue);
          // taskDiv.appendChild(taskBtns);

          todayListContainer.appendChild(taskDiv);

          num++;
        }
      });
    } else {
      let tempContent = document.createElement("div");
      tempContent.classList.add("temp-content");

      let tempHeader = document.createElement("h2");
      tempHeader.classList.add("temp-header");
      tempHeader.textContent = "To-Do List Items Due Today Will Go Here";

      tempContent.appendChild(tempHeader);

      todayListContainer.appendChild(tempContent);
    }

    pageBodyContent.appendChild(todayContent);
  }

  return { PaintTodaysPage };
})();

export { TodayPage };
