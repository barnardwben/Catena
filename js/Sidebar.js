const Sidebar = (() => {
  // DOM ELEMENTS TO WORK WITH
  let sidebarTriggerBtn = document.querySelector(".sb-oc-trigger");
  let sidebar = document.querySelector("#sidebar");
  let mainContent = document.querySelector("#main-content");
  let pageBtns = document.querySelectorAll(".pages");
  let openSbMenu = document.querySelector(".open-sb-menu");

  // FUNCTIONS

  function openMenu() {
    sidebar.classList.add("opened-sb");
    sidebar.classList.remove("closed-sb");

    sidebarTriggerBtn.classList.add("active-sb");
    sidebarTriggerBtn.classList.remove("inactive-sb");

    mainContent.classList.add("main-right");
    mainContent.classList.remove("main-left");
  }

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

  function sbPagesClicker() {
    console.log("working");
    sidebar.classList.remove("opened-sb");
    sidebar.classList.add("closed-sb");

    sidebarTriggerBtn.classList.remove("active-sb");
    sidebarTriggerBtn.classList.add("inactive-sb");

    mainContent.classList.remove("main-right");
    mainContent.classList.add("main-left");
  }

  // EVENT LISTNERS
  sidebarTriggerBtn.addEventListener("click", (e) => {
    clickedTrigger(e);

    openCloseSidebar(e);
  });

  openSbMenu.addEventListener("click", () => {
    openMenu();
  });

  pageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sbPagesClicker();
    });
  });

  return { sbPagesClicker, sidebarTriggerBtn, sidebar, mainContent, pageBtns };
})();

export { Sidebar };
