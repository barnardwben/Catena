const UpcomingPage = (() => {
  let pageBodyContent = document.querySelector("#main-content");
  function PaintUpcomingPage() {
    pageBodyContent.innerHTML = "";
    let upcomingListArr = [];

    if (localStorage.getItem("mytasks") !== null) {
      upcomingListArr = JSON.parse(localStorage.getItem("mytasks"));
    }

    let todaysDate = new Date();
    // let tomorrow = new Date();

    let tomorrowDate = todaysDate.getDate() + 1;
    let tomorrowDay = todaysDate.getDay() + 1;
    let tomorrowMonth = todaysDate.getMonth();

    let tomorrow = new Date(2022, tomorrowMonth, tomorrowDate, tomorrowDay);

    let dayaftertomorrow = new Date(
      2022,
      tomorrowMonth,
      tomorrowDate + 1,
      tomorrowDay + 1
    );

    console.log(tomorrow);
    console.log(todaysDate);
    console.log(dayaftertomorrow);

    todaysDate = todaysDate.toString();
    tomorrow = tomorrow.toString();
    dayaftertomorrow = dayaftertomorrow.toString();

    todaysDate = todaysDate.split(" ");
    tomorrow = tomorrow.split(" ");
    dayaftertomorrow = dayaftertomorrow.split(" ");

    todaysDate = `${todaysDate[0]} ${todaysDate[1]} ${todaysDate[2]}`;
    tomorrow = `${tomorrow[0]} ${tomorrow[1]} ${tomorrow[2]}`;
    dayaftertomorrow = `${dayaftertomorrow[0]} ${dayaftertomorrow[1]} ${dayaftertomorrow[2]}`;

    let upcomingContent = document.createElement("div");
    upcomingContent.classList.add("upcoming-section-content");

    let upcomingHeader = document.createElement("h1");
    upcomingHeader.innerHTML = "Upcoming To-Do List Items";

    upcomingContent.appendChild(upcomingHeader);

    let upcomingListSection = document.createElement("section");
    upcomingListSection.classList.add("uplist-section");
    upcomingContent.appendChild(upcomingListSection);

    let upcomingListContainer = document.createElement("div");
    upcomingListContainer.classList.add("uplist-container");

    upcomingListSection.appendChild(upcomingListContainer);
    let num = 0;
    if (upcomingListArr.length > 0) {
      upcomingListArr.forEach((item) => {
        if (
          item.dueDate === todaysDate ||
          item.dueDate === tomorrow ||
          item.dueDate === dayaftertomorrow
        ) {
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

          upcomingListContainer.appendChild(taskDiv);

          num++;
        }
      });
    } else {
      let tempContent = document.createElement("div");
      tempContent.classList.add("temp-content");

      let tempHeader = document.createElement("h2");
      tempHeader.classList.add("temp-header");
      tempHeader.textContent =
        "To-Do List Items Due Within The Next 3-Days Will Go Here";

      tempContent.appendChild(tempHeader);

      upcomingListContainer.appendChild(tempContent);
    }

    pageBodyContent.appendChild(upcomingContent);
  }

  return { PaintUpcomingPage };
})();

export { UpcomingPage };
