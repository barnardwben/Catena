import { Modals } from "./Modals";

const Journal = (title, description, created, crabbv) => {
  return { title, description, created, crabbv };
};

const JournalPage = (() => {
  let bodyElement = document.querySelector(".body");
  let journalForm = document.querySelector("#journal-form-container");
  let exitJournalBtn = document.querySelector(".exit-journal-form");
  let journalsArr = [];

  let updateJournalForm = document.querySelector(
    "#updatejournal-form-container"
  );
  let exitUpdateJournalBtn = document.querySelector(".exit-updatejournal-form");

  let currentJr = undefined;

  if (localStorage.getItem("myjournals") !== null) {
    journalsArr = JSON.parse(localStorage.getItem("myjournals"));
  }
  let pageBodyContent = document.querySelector("#main-content");

  function JournalFormSubmit(e) {
    e.preventDefault();

    JournalHandler.createJournal();

    PaintJournalPage();

    Modals.exitModal(journalForm, "noshow-journal-modal");
  }

  function UpdateJournalSubmitForm(e) {
    e.preventDefault();
    let elementToRemove = document.querySelector(".popup-jr-section");

    JournalHandler.updateJournal(currentJr);

    PaintJournalPage();

    Modals.exitModal(updateJournalForm, "noshow-upjr-modal");
    bodyElement.removeChild(elementToRemove);
  }

  function ReadJournal(elementid) {
    let bodyElement = document.querySelector(".body");
    let jrId = elementid.target.dataset.jrid;

    let currentJournal = journalsArr[jrId];
    currentJr = elementid;

    let popJournalSection = document.createElement("section");
    popJournalSection.classList.add("popup-jr-section");

    let popJournalDiv = document.createElement("div");
    popJournalDiv.classList.add("popup-jr-div");

    popJournalSection.appendChild(popJournalDiv);

    let popJournalExit = document.createElement("i");
    popJournalExit.classList.add("fas", "fa-times-circle", "pop-jr-exit");
    popJournalExit.addEventListener("click", () => {
      // Modals.exitModal(popJournalSection, "noshow-popjournal");
      bodyElement.removeChild(popJournalSection);
    });

    let popJournalHD = document.createElement("div");
    popJournalHD.classList.add("pop-delhead-div");

    let popJournalDelete = document.createElement("i");
    popJournalDelete.classList.add("fas", "fa-trash-alt", "pop-delete-btn");
    popJournalDelete.addEventListener("click", () => {
      JournalHandler.deleteJournal(elementid);
      bodyElement.removeChild(popJournalSection);
    });

    let popJournalEdit = document.createElement("i");
    popJournalEdit.classList.add("fas", "fa-edit", "journal-edit");
    popJournalEdit.addEventListener("click", () => {
      Modals.showModal(updateJournalForm, "noshow-upjr-modal");

      let upTitle = document.querySelector("#updatejournaltitle");
      let upDescription = document.querySelector("#updatejournaldescription");

      upTitle.value = currentJournal.title;
      upDescription.value = currentJournal.description;
    });

    let popJournalTitle = document.createElement("h1");
    popJournalTitle.classList.add("pop-jr-title");
    popJournalTitle.textContent = currentJournal.title;

    popJournalHD.appendChild(popJournalTitle);
    popJournalHD.appendChild(popJournalEdit);
    popJournalHD.appendChild(popJournalDelete);

    let popJournalCreated = document.createElement("span");
    popJournalCreated.classList.add("pop-jr-created");
    popJournalCreated.textContent = currentJournal.crabbv;

    let popJournalDescription = document.createElement("pre");
    popJournalDescription.classList.add("pop-jr-description");
    popJournalDescription.textContent = currentJournal.description;

    popJournalDiv.appendChild(popJournalHD);
    popJournalDiv.appendChild(popJournalExit);
    popJournalDiv.appendChild(popJournalCreated);
    popJournalDiv.appendChild(popJournalDescription);

    bodyElement.appendChild(popJournalSection);
  }

  function PaintJournalPage() {
    pageBodyContent.innerHTML = "";

    exitJournalBtn.addEventListener("click", () => {
      Modals.exitModal(journalForm, "noshow-journal-modal");
    });

    exitUpdateJournalBtn.addEventListener("click", () => {
      Modals.exitModal(updateJournalForm, "noshow-upjr-modal");
    });

    let journalContent = document.createElement("div");
    journalContent.classList.add("journal-content");
    let journalHeader = document.createElement("h1");
    journalHeader.classList.add("journal-header");
    journalHeader.innerHTML = "My Journals";
    let journalPageDescription = document.createElement("p");
    journalPageDescription.classList.add("journal-page-description");
    journalPageDescription.innerHTML = "A space to create and post journals";

    journalContent.appendChild(journalHeader);
    journalContent.appendChild(journalPageDescription);

    let journalsSection = document.createElement("section");
    journalsSection.classList.add("journals-section");

    journalContent.appendChild(journalsSection);

    let journalsContainer = document.createElement("div");
    journalsContainer.classList.add("journals-container");

    journalsSection.appendChild(journalsContainer);

    let addJournalButton = document.createElement("i");
    addJournalButton.classList.add("fas", "fa-book-medical", "add-journal-btn");
    addJournalButton.addEventListener("click", () => {
      Modals.showModal(journalForm, "noshow-journal-modal");
    });

    journalsContainer.appendChild(addJournalButton);

    let num = 0;
    journalsArr.forEach((jr) => {
      let journalDiv = document.createElement("div");
      journalDiv.classList.add("jr-div");
      journalDiv.dataset.jrid = num;
      journalDiv.addEventListener("click", (e) => {
        ReadJournal(e);
      });

      let journalIcon = document.createElement("i");
      journalIcon.classList.add("fas", "fa-file-alt", "all-journals");
      journalIcon.dataset.jrid = num;

      let journalTitle = document.createElement("h3");
      journalTitle.classList.add("journal-title");
      journalTitle.textContent = `${jr.title}:`;
      journalTitle.dataset.jrid = num;

      let journalCreatedDate = document.createElement("span");
      journalCreatedDate.classList.add("journal-created-date");
      journalCreatedDate.textContent = jr.crabbv;
      journalCreatedDate.dataset.jrid = num;

      journalDiv.appendChild(journalIcon);
      journalDiv.appendChild(journalTitle);
      journalDiv.appendChild(journalCreatedDate);
      journalsContainer.appendChild(journalDiv);

      num++;
    });

    journalForm.addEventListener("submit", JournalFormSubmit);

    updateJournalForm.addEventListener("submit", UpdateJournalSubmitForm);

    pageBodyContent.appendChild(journalContent);
  }

  return {
    journalsArr,
    PaintJournalPage,
  };
})();

const JournalHandler = (() => {
  let newJournal;
  function createJournal() {
    newJournal = "";

    let journalTitle;
    let journalDescription;
    let journalCreated;

    journalTitle = document.querySelector("#journaltitle");
    journalDescription = document.querySelector("#journaldescription");
    journalCreated = new Date().toString();

    let jrAbbv = journalCreated.split(" ");

    jrAbbv = `${jrAbbv[0]} ${jrAbbv[1]} ${jrAbbv[2]} ${jrAbbv[3]}`;

    newJournal = Journal(
      journalTitle.value,
      journalDescription.value,
      journalCreated,
      jrAbbv
    );

    JournalPage.journalsArr.push(newJournal);

    addJournalsToStorage(JournalPage.journalsArr);
    // CLEAR INPUTS
    journalTitle.value = "";
    journalDescription.value = "";
  }

  function addJournalsToStorage(journals) {
    localStorage.setItem("myjournals", JSON.stringify(journals));
  }

  function deleteJournal(e) {
    let selectedJournal = e.target.dataset.jrid;

    JournalPage.journalsArr.splice(parseInt(selectedJournal), 1);

    addJournalsToStorage(JournalPage.journalsArr);
    JournalPage.PaintJournalPage();
  }

  function updateJournal(e) {
    let selectedJournal = e.target.dataset.jrid;

    let jrTitle = document.querySelector("#updatejournaltitle");
    let jrDescription = document.querySelector("#updatejournaldescription");

    let upJournal = JournalPage.journalsArr[selectedJournal];

    upJournal.title = jrTitle.value;
    upJournal.description = jrDescription.value;

    addJournalsToStorage(JournalPage.journalsArr);

    jrTitle.value = "";
    jrDescription.value = "";
  }

  return { createJournal, addJournalsToStorage, deleteJournal, updateJournal };
})();

export { JournalPage };
