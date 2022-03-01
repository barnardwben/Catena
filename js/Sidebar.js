const Sidebar = (() => {
  // DOM ELEMENTS TO WORK WITH
  let sidebarTriggerBtn = document.querySelector(".sb-oc-trigger");
  let sidebar = document.querySelector("#sidebar");
  let mainContent = document.querySelector("#main-content");

  // FUNCTIONS
  //// FUNCTION TO CHANGE OPEN/CLOSE SIDEBAR BUTTON STYLING
  function clickedTrigger(e) {
    if (e.target.classList.contains("active-sb")) {
      console.log("1");
      e.target.classList.remove("active-sb");
      e.target.classList.add("inactive-sb");
    } else if (e.target.classList.contains("inactive-sb")) {
      console.log("2");
      e.target.classList.remove("inactive-sb");
      e.target.classList.add("active-sb");
    }
  }

  //// FUNCTION TO OPEN/CLOSE SIDEBAR
  function openCloseSidebar(e) {
    if (e.target.classList.contains("active-sb")) {
      console.log("3");
      sidebar.classList.remove("closed-sb");
      sidebar.classList.add("opened-sb");
      mainContent.classList.remove("main-left");
      mainContent.classList.add("main-right");
    } else if (e.target.classList.contains("inactive-sb")) {
      console.log("4");
      sidebar.classList.remove("opened-sb");
      sidebar.classList.add("closed-sb");
      mainContent.classList.remove("main-right");
      mainContent.classList.add("main-left");
    }
  }

  // EVENT LISTNERS
  sidebarTriggerBtn.addEventListener("click", (e) => {
    clickedTrigger(e);

    openCloseSidebar(e);
  });
})();

export { Sidebar };
