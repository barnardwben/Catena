import { Modals } from "./Modals";
import { WorkspaceModal } from "./WorkspaceModal";
import { PageSwitch } from "./PageSwitcher";
import { Sidebar } from "./Sidebar";

// OUR FACTORY FUNCTION TO CREATE WORKSPACES
const Workspace = (title, description, id) => {
  return {
    title,
    description,
    id,
    ondeck: [],
    inprogress: [],
    review: [],
    complete: [],
  };
};

// CREATED Workspaces IIFE TO RETRIEVE ANY PREVIOUSLY CREATED WORKSPACES FROM LOCAL STORAGE AND ADD THEM TO OUR workspacesArr ARRAY
const Workspaces = (() => {
  // CREATE ARRAY TO STORE OUR WORKSPACES
  let workspacesArr = [];
  // localStorage.clear();

  // CHECK IF ANY WORKSPACES EXIST AND ADD THEM TO OUR workspacesArr ARRAY
  if (localStorage.getItem("myWorkspaces") !== null) {
    workspacesArr = JSON.parse(localStorage.getItem("myWorkspaces"));
  }

  // RETURN OUR workspacesArr ARRAY BECAUSE WE NEED TO USE IT IN OTHER MODULES
  return { workspacesArr };
})();

// CREATE IIFE TO HANDLE OUR ADD NEW WORKSPACE FORM
const WorkspaceFormHandler = (() => {
  // GET DOM ELEMENTS WE NEED TO HANDLE FORM
  let workspaceForm = document.querySelector(".workspace-form");
  let workspaceFormTitle = document.querySelector("#title");
  let workspaceFormDescription = document.querySelector("#description");
  let newWorkspace;
  let workspaces = document.querySelector("#workspaces");

  // FUNCTIONS
  // Function to create a new Workspace object
  function CreateWorkspace(title, description) {
    // CREATE VARIABLE EQUAL TO 0 AS TO ADD TO OUR VERY FIRST WORKSPACE ID VALUE
    let numberID = 0;

    // GET A CURRENT LIST OF OUR WORKSPACES FROM LOCAL STORAGE
    let workspaceList = JSON.parse(localStorage.getItem("myWorkspaces"));
    // CHECK TO SEE IF ANY WORKSPACES EXIST (IF NONE EXIST IT WILL BE EQUAL TO null)
    if (workspaceList == null) {
      // IF NO PREVIOUS WORKSPACES EXIST WE CREATE OUR NEW WORKSPACE WITH AN ID VALUE EQUAL TO 0
      newWorkspace = Workspace(title, description, numberID);
    } else {
      // IF OTHER WORKSPACES EXIST THEN CREATE WORKSPACE WITH ID VALUE EQUAL TO THE LENGTH OF OUR WORKSPACES LIST
      newWorkspace = Workspace(title, description, workspaceList.length);
    }

    return newWorkspace;
  }

  // Function to add new Workspace to our array of workspaces
  function AddToArray(item) {
    // ADD NEW WORKSPACE TO workspacesArr ARRAY
    Workspaces.workspacesArr.push(item);
  }

  // Function to add our array of workspaces to localStorage
  function AddToStorage(item) {
    // ADD/UPDATE OUR WORKSPACES TO LOCAL STORAGE
    localStorage.setItem("myWorkspaces", JSON.stringify(item));
  }

  // Function to take our workspace items from localStorage and populate them in our sidebar navigation
  function AddToSidebar() {
    // CREATE NUMBER VARIABLE THAT HOLDS CURRENT VALUE THAT WE WANT TO ADD AS A DATA ATTRIBUTE TO OUR NEWLY CREATED SIDEBAR BUTTON
    let num = 0;

    // CLEAR OUR SIDEBAR LIST SO THERE AREN'T MULTIPLES OF THE SAME BUTTON
    workspaces.innerHTML = "";
    // GET OUR CURRENT LIST OF WORKSPACES FROM LOCAL STORAGE
    let workspaceList = JSON.parse(localStorage.getItem("myWorkspaces"));
    // LOOP THROUGH workspaceList ARRAY TO WORK WITH INDIVIDUAL WORKSPACES
    workspaceList.forEach((space) => {
      // CREATE NEW DIV ELEMENT THAT WILL HOLD OUR WORKSPACE BUTTON
      let newDiv = document.createElement("div");
      newDiv.classList.add("workspace");
      // CREATE BUTTON THAT WILL HOLD OUR WORKSPACE
      let newButton = document.createElement("button");
      newButton.classList.add("workspaces-btn", "pages");

      // ADD NAME ATTRIBUTE TO OUR WORKSPACE (THIS IS FOR IDENTIFYING WHAT PAGE WE ARE SWITCHING TO IN OUR PAGESWITCHER MODULE)
      newButton.name = "workspacepage";
      // SET AN ID TO OUR BUTTON THAT CORRESPONDS WITH THE WORKSPACE INDEX POSITION IN OUR WORKSPACE ARRAY (THIS MAKES IT EASIER TO DELETE/SWITCH TO CORRECT WORKSPACE PAGE)
      newButton.dataset.indexNumber = num;
      // SET INNER TEXT OF OUR BUTTON TO THE CURRENT WORKSPACE TITLE
      newButton.textContent = space.title;
      // ADD PageSwitch EVENTS TO OUR WORKSPACE BUTTON
      newButton.addEventListener("click", (e) => {
        // EVENT TO HIGHLIGHT CURRENTLY ACTIVE SIDEBAR BUTTON
        PageSwitch.activePageBtn(e.target);
        // EVENT TO SHOW USER CORRECT CONTENT BASED ON CLICKED BUTTON
        PageSwitch.activePage(e.target);
        // EVENT TO CLOSE SIDEBAR ON WORKSPACES SIDEBAR BTN CLICK
        Sidebar.sbPagesClicker();
      });

      // APPEND BUTTON TO DIV
      newDiv.appendChild(newButton);
      // APPEND DIV TO SIDEBAR WORKSPACE SECTION
      workspaces.appendChild(newDiv);

      // INCREMENT NUMBER VARIABLE (THIS IS FOR BUTTON ID)
      num++;
    });
  }

  // On page load if we have a localStorage item called myWorkspaces then run our AddToSidebar function. This will update our sidebar when user loads our application
  if (localStorage.getItem("myWorkspaces") !== null) {
    AddToSidebar();
  }

  // EVENTLISTENERS
  // On form submit run our functions (CreateWorkspace - AddToArray - AddToStorage - AddToSidebar - ExitModal)
  workspaceForm.addEventListener("submit", (e) => {
    // PREVENT FORM FROM SENDING TO SERVER (WE ARE USING LOCAL STORAGE; HENCE NO BACKEND TO SEND DATA TO)
    e.preventDefault();
    // GET THE VALUE OF OUR WORKSPACE FORM TITLE INPUT
    let titleValue = workspaceFormTitle.value;

    // GET THE VALUE OF OUR WORKSPACE FORM DESCRIPTION INPUT/TEXTAREA
    let descriptionValue = workspaceFormDescription.value;
    // CREATE VARIABLE TO HOLD OUR WORKSPACE TITLES
    let titlesArr = [];
    // LOOP THROUGH OUR workspaceArr ARRAY TO RETRIEVE WORKSPACE TITLE AND ADD IT TO OUR titlesArr ARRAY
    Workspaces.workspacesArr.forEach((item) => {
      // PUSH WORKSPACE TITLE TO titlesArr ARRAY
      titlesArr.push(item.title);
    });

    // CHECK IF A WORKSPACE WITH THIS TITLE ALREADY EXISTS
    if (titlesArr.indexOf(titleValue) !== -1) {
      // IF ABOVE IS TRUE GET OUR ALERT ELEMENT FROM THE DOM
      let workspaceAlert = document.querySelector(".workspace-alert");
      // ADD OUR ALERT TO PAGE SO OUR USER KNOWS THEY HAVE TO CHANGE TITLE IN THE TITLE INPUT
      workspaceAlert.classList.remove("noshow-alert");
      setTimeout(() => {
        // AFTER 5 SECONDS REMOVE ALERT FROM PAGE
        workspaceAlert.classList.add("noshow-alert");
      }, 5000);
    } else {
      // IF TITLE DIDN'T EXIST THEN WE CAN GO THROUGH THE PROCESS OF CREATING OUR NEW WORKSPACE
      // RUN FUNCTION TO CREATE WORKSPACE (PARAMETER VALUES ARE PULLED FROM OUR FORM)
      CreateWorkspace(titleValue, descriptionValue);

      // RUN FUNCTION TO ADD NEW WORKSPACE TO OUR workspacesArr ARRAY
      AddToArray(newWorkspace);

      // RUN FUNCTION TO UPDATE OUR WORKSPACE DATA IN LOCAL STORAGE
      AddToStorage(Workspaces.workspacesArr);

      // RUN FUNCTION TO UPDATE OUR WORKSPACES SECTION IN THE SIDEBAR
      AddToSidebar();

      // GET OUR WORKSPACE BTNS
      let wsBtns = document.querySelectorAll(".workspaces-btn");

      // SWITCH TO RECENTLY CREATED WORKSPACE PAGE AND SET ITS BTN TO ACTIVE
      PageSwitch.activePageBtn(wsBtns[newWorkspace.id]);
      PageSwitch.activePage(wsBtns[newWorkspace.id]);
      // EVENT TO CLOSE SIDEBAR ON WORKSPACES SIDEBAR BTN CLICK
      Sidebar.sbPagesClicker();

      // RUN FUNCTION TO EXIT OUR ADD NEW WORKSPACE MODAL
      Modals.exitModal(
        WorkspaceModal.workspaceFormContainer,
        "noshow-workspace-modal"
      );

      // RESET OUR ADD NEW WORKSPACE FORM INPUT VALUES TO EMPTY
      workspaceFormTitle.value = "";
      workspaceFormDescription.value = "";
    }
  });

  // RETURN AddToSidebar & AddToStorage FUNCTIONS BECAUSE WE WILL NEED TO USE THIS IN OTHER MODULES
  return { AddToSidebar, AddToStorage };
})();

export { Workspaces, WorkspaceFormHandler };
