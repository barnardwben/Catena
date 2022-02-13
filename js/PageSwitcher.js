import { GuidePage } from "./Guide";
import { TodayPage } from "./Today";
import { WorkspacePages } from "./WorkspacePages";
// import { WorkspacePagesHandler } from "./WorkspacePages";

export const PageSwitch = (() => {
  let pageBodyContent = document.querySelector("#main-content");

  // INITIAL LANDING PAGE
  pageBodyContent.appendChild(GuidePage.guideContent);

  // FUNCTION TO REPLACE & SELECT CURRENT PAGE BUTTON
  function activePageBtn(e) {
    // REMOVE ACTIVE CLASS FROM PREVIOUSLY SELECTED PAGE BTN
    document.querySelectorAll(".pages").forEach((page) => {
      page.classList.remove("active-btn");
    });

    // ADD OUR ACTIVE CLASS TO CURRENTLY SELECTED PAGE BTN
    let clickedPage = e;
    clickedPage.classList.add("active-btn");
  }

  // FUNCTION TO SHOW CURRENTLY SELECTED PAGE CONTENT
  function activePage(e) {
    // CLEAR CURRENT PAGE CONTENT
    pageBodyContent.innerHTML = "";
    // CREATE VARIABLE THAT HOLDS OUR CLICKED PAGE LINK
    let selectedPage = e;

    // CREATE VARIABLE THAT WE WILL USE TO IDENTIFY WHICH PAGE TO SHOW BASED ON ITS NAME ATTRIBUTE
    let nameOfPage = selectedPage.name;

    // CROSS CHECK nameOfPage VALUE IN ORDER TO CORRECTLY POPULATE OUR PAGE WITH THE CORRECT CONTENT
    switch (nameOfPage) {
      case "today":
        pageBodyContent.appendChild(TodayPage.todayContent);
        break;
      case "guide":
        pageBodyContent.appendChild(GuidePage.guideContent);
        break;
      // ALL INDIVIDUAL WORKSPACES HAVE THEIR NAME ATTR EQUAL TO "workspacepage"
      case "workspacepage":
        localStorage.setItem(
          "selectedPage",
          JSON.stringify(e.dataset.indexNumber)
        );
        let sp = JSON.parse(localStorage.getItem("selectedPage"));
        WorkspacePages.PaintUI(sp);
        break;
      default:
        console.log("NO PAGE CONTENT YET");
    }
  }

  // GET ALL BUTTONS WITH THE CLASS pages AND ADD OUR PAGESWITCH FUNCTIONALITY TO THEM ON CLICK
  document.querySelectorAll(".pages").forEach((page) => {
    page.addEventListener("click", (e) => {
      activePageBtn(e.target);
      activePage(e.target);
    });
  });

  return { activePageBtn, activePage };
})();
