import { Workspaces } from "./Workspaces";
import { WorkspaceFormHandler } from "./Workspaces";
import { Modals } from "./Modals";
import { PageSwitch } from "./PageSwitcher";

// // WRITE A FACTORY FUNCTION THAT REPRESENTS OUR CARD OBJECTS
const Cards = (title, due, description, date, priority, cardtype, cardid) => {
  return {
    title,
    due,
    description,
    date,
    priority,
    cardtype,
    cardid,
  };
};

const WorkspacePages = (() => {
  // let cardsArr = [];
  // GET OUR NEW CARD FORM DOM ELEMENTS
  let exitFormBtn = document.querySelector(".exit-card-form");
  let cardFormContainer = document.querySelector("#card-form-container");
  let cardForm = document.querySelector(".card-form");
  let clickedRowType = "0";
  let currentSpace = undefined;

  function submitHandler(e) {
    e.preventDefault();

    BoardHandler.createCard(clickedRowType, currentSpace);

    Modals.exitModal(cardFormContainer, "noshow-card-modal");

    PaintUI(currentSpace.id);
  }

  function PaintUI(selectedSpace) {
    // RESET OUR CARDS ARRAY

    // console.log("firstcardsarr", cardsArr);

    // GET OUR CURRENT LIST OF WORKSPACES AND CREATE A NEW ARRAY OUT OF THEM
    let pagesArr = Workspaces.workspacesArr;

    // SET OUR CURRENT WORKSPACE TO A VARIABLE
    currentSpace = pagesArr[selectedSpace];

    // console.log("test", pagesArr);
    // console.log(currentSpace);

    let mainContentSection = document.querySelector("#main-content");

    mainContentSection.innerHTML = "";

    let workContent = document.createElement("div");
    workContent.classList.add("ws-content");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("tdiv");
    workContent.appendChild(titleDiv);

    let workContentTitle = document.createElement("h1");
    workContentTitle.classList.add("ws-title");
    workContentTitle.textContent = currentSpace.title;
    titleDiv.appendChild(workContentTitle);

    let workspaceDeleteBtn = document.createElement("i");
    workspaceDeleteBtn.classList.add("fas", "fa-trash-alt", "ws-delete-btn");
    workspaceDeleteBtn.dataset.wsid = currentSpace.id;
    workspaceDeleteBtn.addEventListener("click", (e) => {
      let wsID = e.target.dataset.wsid;

      BoardHandler.removeWorkspace(wsID);
    });
    titleDiv.appendChild(workspaceDeleteBtn);

    let workContentDescriptionDiv = document.createElement("div");
    let workContentDescription = document.createElement("p");
    workContentDescription.classList.add("ws-description");
    workContentDescription.textContent = currentSpace.description;
    workContentDescriptionDiv.appendChild(workContentDescription);
    workContent.appendChild(workContentDescriptionDiv);

    let workspaceBoardSection = document.createElement("section");
    workspaceBoardSection.id = "workspace-board-section";

    let workspaceBoardContainer = document.createElement("div");
    workspaceBoardContainer.classList.add("workspace-board-container");

    // CREATE ON DECK ROW
    let onDeckRow = document.createElement("div");
    onDeckRow.classList.add("ondeck", "ws-row", "open-row");
    let onDeckTitle = document.createElement("h3");
    onDeckTitle.classList.add("row-title");
    onDeckTitle.textContent = "On Deck";
    let onDeckRowBtns = document.createElement("div");
    onDeckRowBtns.classList.add("ondeck-row-btns");
    let mobileCollapseRowOne = document.createElement("button");
    mobileCollapseRowOne.classList.add(
      "mobile-collapse-one",
      "mobile-cl",
      "opened-row"
    );
    mobileCollapseRowOne.addEventListener("click", () => {
      if (mobileCollapseRowOne.classList.contains("opened-row")) {
        console.log("closing");
        mobileCollapseRowOne.classList.remove("opened-row");
        mobileCollapseRowOne.classList.add("closed-row");
        onDeckRow.classList.remove("open-row");
        onDeckRow.classList.add("close-row");
      } else if (mobileCollapseRowOne.classList.contains("closed-row")) {
        console.log("opening");
        mobileCollapseRowOne.classList.remove("closed-row");
        mobileCollapseRowOne.classList.add("opened-row");
        onDeckRow.classList.remove("close-row");
        onDeckRow.classList.add("open-row");
      }
    });
    let mobileCollapseIcon = document.createElement("i");
    mobileCollapseIcon.classList.add(
      "fas",
      "fa-caret-down",
      "mobile-collapse-one"
    );
    let onDeckBtn = document.createElement("button");
    onDeckBtn.classList.add("ondeck-btn", "ws-btns");
    onDeckBtn.dataset.rowtype = 0;
    let onDeckIcon = document.createElement("i");
    onDeckIcon.classList.add("fas", "fa-plus", "ondeck-btn");
    onDeckIcon.dataset.rowtype = 0;
    onDeckRowBtns.appendChild(mobileCollapseRowOne);
    onDeckRowBtns.appendChild(onDeckBtn);
    mobileCollapseRowOne.appendChild(mobileCollapseIcon);
    onDeckTitle.appendChild(onDeckRowBtns);
    onDeckBtn.appendChild(onDeckIcon);
    onDeckRow.appendChild(onDeckTitle);

    let onDeckArr = currentSpace.ondeck;

    onDeckArr.forEach((card) => {
      card.cardid = onDeckArr.indexOf(card);

      let newCardDiv = document.createElement("div");
      newCardDiv.classList.add("card-div");

      let cardTop = document.createElement("div");
      cardTop.classList.add("card-top");

      let cardTitle = document.createElement("h4");
      cardTitle.textContent = card.title;
      cardTop.appendChild(cardTitle);

      let cardDue = document.createElement("button");
      cardDue.classList.add("due");
      cardDue.textContent = `Due: ${card.due}`;
      cardTop.appendChild(cardDue);

      let cardMiddle = document.createElement("div");
      cardMiddle.classList.add("card-middle");

      let cardDescription = document.createElement("p");
      cardDescription.classList.add("card-description");
      cardDescription.textContent = card.description;
      cardMiddle.appendChild(cardDescription);

      let cardBottom = document.createElement("div");
      cardBottom.classList.add("card-bottom");

      let cardDeleteBtn = document.createElement("i");
      cardDeleteBtn.classList.add("fas", "fa-trash-alt", "card-delete-btn");
      cardDeleteBtn.dataset.cardrow = 0;
      cardDeleteBtn.dataset.cardiden = card.cardid;
      cardDeleteBtn.addEventListener("click", (e) => {
        console.log(e.target);
        let clickCard = e.target.dataset.cardiden;
        let cRow = e.target.dataset.cardrow;

        BoardHandler.deleteCard(clickCard, cRow, currentSpace);
      });
      cardBottom.appendChild(cardDeleteBtn);

      let cardDate = document.createElement("span");
      cardDate.textContent = `Created: ${card.date}`;
      cardDate.classList.add("created-date");
      cardBottom.appendChild(cardDate);

      let cardPriority = document.createElement("button");
      cardPriority.classList.add("card-p-btn", "onDeck");
      cardPriority.dataset.cardid = card.cardid;
      cardPriority.dataset.cardtype = 0;
      cardPriority.addEventListener("click", (e) => {
        let curCardId = e;
        let priorityOptionsContainer = document.createElement("div");
        priorityOptionsContainer.classList.add("p-options-container");

        let pOptions = ["On Deck", "In Progress", "Review", "Complete"];

        pOptions.forEach((option) => {
          let optionBtn = document.createElement("button");
          optionBtn.classList.add("p-options");
          optionBtn.dataset.op = pOptions.indexOf(option);
          optionBtn.innerHTML = option;

          priorityOptionsContainer.appendChild(optionBtn);
        });

        cardBottom.appendChild(priorityOptionsContainer);

        let newPriorityBtns = document.querySelectorAll(".p-options");

        newPriorityBtns.forEach((pbtn) => {
          pbtn.addEventListener("click", (e) => {
            let newP = e;
            BoardHandler.changePriority(newP, curCardId, currentSpace);
          });
        });
      });
      cardPriority.textContent = card.priority;
      cardBottom.appendChild(cardPriority);

      newCardDiv.appendChild(cardTop);
      newCardDiv.appendChild(cardMiddle);
      newCardDiv.appendChild(cardBottom);

      onDeckRow.appendChild(newCardDiv);
    });

    // CREATE IN PROGRESS ROW
    let inProgressRow = document.createElement("div");
    inProgressRow.classList.add("inprogress", "ws-row", "open-row");
    let inProgressTitle = document.createElement("h3");
    inProgressTitle.classList.add("row-title");
    inProgressTitle.textContent = "In Progress";
    let inProgressRowBtns = document.createElement("div");
    inProgressRowBtns.classList.add("inprogress-row-btns");
    let mobileCollapseRowTwo = document.createElement("button");
    mobileCollapseRowTwo.classList.add(
      "mobile-collapse-two",
      "mobile-cl",
      "opened-row"
    );
    mobileCollapseRowTwo.addEventListener("click", () => {
      if (mobileCollapseRowTwo.classList.contains("opened-row")) {
        console.log("closing");
        mobileCollapseRowTwo.classList.remove("opened-row");
        mobileCollapseRowTwo.classList.add("closed-row");
        inProgressRow.classList.remove("open-row");
        inProgressRow.classList.add("close-row");
      } else if (mobileCollapseRowTwo.classList.contains("closed-row")) {
        console.log("opening");
        mobileCollapseRowTwo.classList.remove("closed-row");
        mobileCollapseRowTwo.classList.add("opened-row");
        inProgressRow.classList.remove("close-row");
        inProgressRow.classList.add("open-row");
      }
    });
    let mobileCollapseIconTwo = document.createElement("i");
    mobileCollapseIconTwo.classList.add(
      "fas",
      "fa-caret-down",
      "mobile-collapse-two"
    );

    let inProgressBtn = document.createElement("button");
    inProgressBtn.classList.add("inprogress-btn", "ws-btns");
    inProgressBtn.dataset.rowtype = 1;
    let inProgressIcon = document.createElement("i");
    inProgressIcon.classList.add("fas", "fa-plus", "inprogress-btn");
    inProgressIcon.dataset.rowtype = 1;
    inProgressRowBtns.appendChild(mobileCollapseRowTwo);
    inProgressRowBtns.appendChild(inProgressBtn);
    mobileCollapseRowTwo.appendChild(mobileCollapseIconTwo);
    inProgressTitle.appendChild(inProgressRowBtns);
    inProgressBtn.appendChild(inProgressIcon);
    inProgressRow.appendChild(inProgressTitle);

    let inProgressArr = currentSpace.inprogress;

    inProgressArr.forEach((card) => {
      card.cardid = inProgressArr.indexOf(card);

      let newCardDiv = document.createElement("div");
      newCardDiv.classList.add("card-div");

      let cardTop = document.createElement("div");
      cardTop.classList.add("card-top");

      let cardTitle = document.createElement("h4");
      cardTitle.textContent = card.title;
      cardTop.appendChild(cardTitle);

      let cardDue = document.createElement("button");
      cardDue.classList.add("due");
      cardDue.textContent = `Due: ${card.due}`;
      cardTop.appendChild(cardDue);

      let cardMiddle = document.createElement("div");
      cardMiddle.classList.add("card-middle");

      let cardDescription = document.createElement("p");
      cardDescription.classList.add("card-description");
      cardDescription.textContent = card.description;
      cardMiddle.appendChild(cardDescription);

      let cardBottom = document.createElement("div");
      cardBottom.classList.add("card-bottom");

      let cardDeleteBtn = document.createElement("i");
      cardDeleteBtn.classList.add("fas", "fa-trash-alt", "card-delete-btn");
      cardDeleteBtn.dataset.cardrow = 1;
      cardDeleteBtn.dataset.cardiden = card.cardid;
      cardDeleteBtn.addEventListener("click", (e) => {
        console.log(e.target);
        let clickCard = e.target.dataset.cardiden;
        let cRow = e.target.dataset.cardrow;

        BoardHandler.deleteCard(clickCard, cRow, currentSpace);
      });
      cardBottom.appendChild(cardDeleteBtn);

      let cardDate = document.createElement("span");
      cardDate.textContent = `Created: ${card.date}`;
      cardDate.classList.add("created-date");
      cardBottom.appendChild(cardDate);

      let cardPriority = document.createElement("button");
      cardPriority.classList.add("card-p-btn", "inProgress");
      cardPriority.dataset.cardid = card.cardid;
      cardPriority.dataset.cardtype = 1;
      cardPriority.addEventListener("click", (e) => {
        let curCardId = e;
        let priorityOptionsContainer = document.createElement("div");
        priorityOptionsContainer.classList.add("p-options-container");

        let pOptions = ["On Deck", "In Progress", "Review", "Complete"];

        pOptions.forEach((option) => {
          let optionBtn = document.createElement("button");
          optionBtn.classList.add("p-options");
          optionBtn.dataset.op = pOptions.indexOf(option);
          optionBtn.innerHTML = option;

          priorityOptionsContainer.appendChild(optionBtn);
        });

        cardBottom.appendChild(priorityOptionsContainer);

        let newPriorityBtns = document.querySelectorAll(".p-options");

        newPriorityBtns.forEach((pbtn) => {
          pbtn.addEventListener("click", (e) => {
            console.log("test987");
            let newP = e;
            BoardHandler.changePriority(newP, curCardId, currentSpace);
          });
        });
      });
      cardPriority.textContent = card.priority;
      cardBottom.appendChild(cardPriority);

      newCardDiv.appendChild(cardTop);
      newCardDiv.appendChild(cardMiddle);
      newCardDiv.appendChild(cardBottom);

      inProgressRow.appendChild(newCardDiv);
    });

    // CREATE REVIEW ROW
    let reviewRow = document.createElement("div");
    reviewRow.classList.add("review", "ws-row", "open-row");
    let reviewTitle = document.createElement("h3");
    reviewTitle.classList.add("row-title");
    reviewTitle.textContent = "Review";
    let reviewRowBtns = document.createElement("div");
    reviewRowBtns.classList.add("review-row-btns");
    let mobileCollapseRowThree = document.createElement("button");
    mobileCollapseRowThree.classList.add(
      "mobile-collapse-three",
      "mobile-cl",
      "opened-row"
    );
    mobileCollapseRowThree.addEventListener("click", () => {
      if (mobileCollapseRowThree.classList.contains("opened-row")) {
        console.log("closing");
        mobileCollapseRowThree.classList.remove("opened-row");
        mobileCollapseRowThree.classList.add("closed-row");
        reviewRow.classList.remove("open-row");
        reviewRow.classList.add("close-row");
      } else if (mobileCollapseRowThree.classList.contains("closed-row")) {
        console.log("opening");
        mobileCollapseRowThree.classList.remove("closed-row");
        mobileCollapseRowThree.classList.add("opened-row");
        reviewRow.classList.remove("close-row");
        reviewRow.classList.add("open-row");
      }
    });
    let mobileCollapseIconThree = document.createElement("i");
    mobileCollapseIconThree.classList.add(
      "fas",
      "fa-caret-down",
      "mobile-collapse-three"
    );
    let reviewBtn = document.createElement("button");
    reviewBtn.classList.add("review-btn", "ws-btns");
    reviewBtn.dataset.rowtype = 2;
    let reviewIcon = document.createElement("i");
    reviewIcon.classList.add("fas", "fa-plus", "review-btn");
    reviewIcon.dataset.rowtype = 2;
    reviewRowBtns.appendChild(mobileCollapseRowThree);
    reviewRowBtns.appendChild(reviewBtn);
    mobileCollapseRowThree.appendChild(mobileCollapseIconThree);
    reviewTitle.appendChild(reviewRowBtns);
    reviewBtn.appendChild(reviewIcon);
    reviewRow.appendChild(reviewTitle);

    let reviewArr = currentSpace.review;

    reviewArr.forEach((card) => {
      card.cardid = reviewArr.indexOf(card);

      let newCardDiv = document.createElement("div");
      newCardDiv.classList.add("card-div");

      let cardTop = document.createElement("div");
      cardTop.classList.add("card-top");

      let cardTitle = document.createElement("h4");
      cardTitle.textContent = card.title;
      cardTop.appendChild(cardTitle);

      let cardDue = document.createElement("button");
      cardDue.classList.add("due");
      cardDue.textContent = `Due: ${card.due}`;
      cardTop.appendChild(cardDue);

      let cardMiddle = document.createElement("div");
      cardMiddle.classList.add("card-middle");

      let cardDescription = document.createElement("p");
      cardDescription.classList.add("card-description");
      cardDescription.textContent = card.description;
      cardMiddle.appendChild(cardDescription);

      let cardBottom = document.createElement("div");
      cardBottom.classList.add("card-bottom");

      let cardDeleteBtn = document.createElement("i");
      cardDeleteBtn.classList.add("fas", "fa-trash-alt", "card-delete-btn");
      cardDeleteBtn.dataset.cardrow = 2;
      cardDeleteBtn.dataset.cardiden = card.cardid;
      cardDeleteBtn.addEventListener("click", (e) => {
        console.log(e.target);
        let clickCard = e.target.dataset.cardiden;
        let cRow = e.target.dataset.cardrow;

        BoardHandler.deleteCard(clickCard, cRow, currentSpace);
      });
      cardBottom.appendChild(cardDeleteBtn);

      let cardDate = document.createElement("span");
      cardDate.textContent = `Created: ${card.date}`;
      cardDate.classList.add("created-date");
      cardBottom.appendChild(cardDate);

      let cardPriority = document.createElement("button");
      cardPriority.classList.add("card-p-btn", "review");
      cardPriority.dataset.cardid = card.cardid;
      cardPriority.dataset.cardtype = 2;
      cardPriority.addEventListener("click", (e) => {
        let curCardId = e;
        let priorityOptionsContainer = document.createElement("div");
        priorityOptionsContainer.classList.add("p-options-container");

        let pOptions = ["On Deck", "In Progress", "Review", "Complete"];

        pOptions.forEach((option) => {
          let optionBtn = document.createElement("button");
          optionBtn.classList.add("p-options");
          optionBtn.dataset.op = pOptions.indexOf(option);
          optionBtn.innerHTML = option;

          priorityOptionsContainer.appendChild(optionBtn);
        });

        cardBottom.appendChild(priorityOptionsContainer);

        let newPriorityBtns = document.querySelectorAll(".p-options");

        newPriorityBtns.forEach((pbtn) => {
          pbtn.addEventListener("click", (e) => {
            let newP = e;
            BoardHandler.changePriority(newP, curCardId, currentSpace);
          });
        });
      });
      cardPriority.textContent = card.priority;
      cardBottom.appendChild(cardPriority);

      newCardDiv.appendChild(cardTop);
      newCardDiv.appendChild(cardMiddle);
      newCardDiv.appendChild(cardBottom);

      reviewRow.appendChild(newCardDiv);
    });
    // CREATE COMPLETE ROW
    let completeRow = document.createElement("div");
    completeRow.classList.add("complete", "ws-row", "open-row");
    let completeTitle = document.createElement("h3");
    completeTitle.classList.add("row-title");
    completeTitle.textContent = "Complete";
    let completeRowBtns = document.createElement("div");
    completeRowBtns.classList.add("complete-row-btns");
    let mobileCollapseRowFour = document.createElement("button");
    mobileCollapseRowFour.classList.add(
      "mobile-collapse-four",
      "mobile-cl",
      "opened-row"
    );
    mobileCollapseRowFour.addEventListener("click", () => {
      if (mobileCollapseRowFour.classList.contains("opened-row")) {
        console.log("closing");
        mobileCollapseRowFour.classList.remove("opened-row");
        mobileCollapseRowFour.classList.add("closed-row");
        completeRow.classList.remove("open-row");
        completeRow.classList.add("close-row");
      } else if (mobileCollapseRowFour.classList.contains("closed-row")) {
        console.log("opening");
        mobileCollapseRowFour.classList.remove("closed-row");
        mobileCollapseRowFour.classList.add("opened-row");
        completeRow.classList.remove("close-row");
        completeRow.classList.add("open-row");
      }
    });
    let mobileCollapseIconFour = document.createElement("i");
    mobileCollapseIconFour.classList.add(
      "fas",
      "fa-caret-down",
      "mobile-collapse-four"
    );
    let completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn", "ws-btns");
    completeBtn.dataset.rowtype = 3;
    let completeIcon = document.createElement("i");
    completeIcon.classList.add("fas", "fa-plus", "complete-btn");
    completeIcon.dataset.rowtype = 3;
    completeRowBtns.appendChild(mobileCollapseRowFour);
    completeRowBtns.appendChild(completeBtn);
    mobileCollapseRowFour.appendChild(mobileCollapseIconFour);
    completeTitle.appendChild(completeRowBtns);
    completeBtn.appendChild(completeIcon);
    completeRow.appendChild(completeTitle);

    let completeArr = currentSpace.complete;

    completeArr.forEach((card) => {
      card.cardid = completeArr.indexOf(card);

      let newCardDiv = document.createElement("div");
      newCardDiv.classList.add("card-div");

      let cardTop = document.createElement("div");
      cardTop.classList.add("card-top");

      let cardTitle = document.createElement("h4");
      cardTitle.textContent = card.title;
      cardTop.appendChild(cardTitle);

      let cardDue = document.createElement("button");
      cardDue.classList.add("due");
      cardDue.textContent = `Due: ${card.due}`;
      cardTop.appendChild(cardDue);

      let cardMiddle = document.createElement("div");
      cardMiddle.classList.add("card-middle");

      let cardDescription = document.createElement("p");
      cardDescription.classList.add("card-description");
      cardDescription.textContent = card.description;
      cardMiddle.appendChild(cardDescription);

      let cardBottom = document.createElement("div");
      cardBottom.classList.add("card-bottom");

      let cardDeleteBtn = document.createElement("i");
      cardDeleteBtn.classList.add("fas", "fa-trash-alt", "card-delete-btn");
      cardDeleteBtn.dataset.cardrow = 3;
      cardDeleteBtn.dataset.cardiden = card.cardid;
      cardDeleteBtn.addEventListener("click", (e) => {
        console.log(e.target);
        let clickCard = e.target.dataset.cardiden;
        let cRow = e.target.dataset.cardrow;

        BoardHandler.deleteCard(clickCard, cRow, currentSpace);
      });
      cardBottom.appendChild(cardDeleteBtn);

      let cardDate = document.createElement("span");
      cardDate.textContent = `Created: ${card.date}`;
      cardDate.classList.add("created-date");
      cardBottom.appendChild(cardDate);

      let cardPriority = document.createElement("button");
      cardPriority.classList.add("card-p-btn", "complete");
      cardPriority.dataset.cardid = card.cardid;
      cardPriority.dataset.cardtype = 3;
      cardPriority.addEventListener("click", (e) => {
        let curCardId = e;
        let priorityOptionsContainer = document.createElement("div");
        priorityOptionsContainer.classList.add("p-options-container");

        let pOptions = ["On Deck", "In Progress", "Review", "Complete"];

        pOptions.forEach((option) => {
          let optionBtn = document.createElement("button");
          optionBtn.classList.add("p-options");
          optionBtn.dataset.op = pOptions.indexOf(option);
          optionBtn.innerHTML = option;

          priorityOptionsContainer.appendChild(optionBtn);
        });

        cardBottom.appendChild(priorityOptionsContainer);

        let newPriorityBtns = document.querySelectorAll(".p-options");

        newPriorityBtns.forEach((pbtn) => {
          pbtn.addEventListener("click", (e) => {
            console.log("test987");
            let newP = e;
            BoardHandler.changePriority(newP, curCardId, currentSpace);
          });
        });
      });
      cardPriority.textContent = card.priority;
      cardBottom.appendChild(cardPriority);

      newCardDiv.appendChild(cardTop);
      newCardDiv.appendChild(cardMiddle);
      newCardDiv.appendChild(cardBottom);

      completeRow.appendChild(newCardDiv);
    });

    workspaceBoardContainer.appendChild(onDeckRow);
    workspaceBoardContainer.appendChild(inProgressRow);
    workspaceBoardContainer.appendChild(reviewRow);
    workspaceBoardContainer.appendChild(completeRow);

    workspaceBoardSection.appendChild(workspaceBoardContainer);

    workContent.appendChild(workspaceBoardSection);

    mainContentSection.appendChild(workContent);

    let cardCreatorBtns = document.querySelectorAll(".ws-btns");

    cardCreatorBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        clickedRowType = e.target.dataset.rowtype;
        console.log("clickedRT", clickedRowType);
        // RUN OUR FUNCTION TO POP UP NEW CARD FORM MODAL
        Modals.showModal(cardFormContainer, "noshow-card-modal");

        exitFormBtn.addEventListener("click", () => {
          Modals.exitModal(cardFormContainer, "noshow-card-modal");
        });
      });
    });

    cardForm.addEventListener("submit", submitHandler);
  }

  return {
    PaintUI,
    exitFormBtn,
    cardFormContainer,
    cardForm,
    clickedRowType,
  };
})();

const BoardHandler = (() => {
  // FUNCTION TO CREATE NEW CARD
  function createCard(clickedRow, cSpace) {
    // RESET OUR NEWCARD VARIABLE
    let newCard = "";
    // GET THE ROW WE WANT TO PUT OUR CARD IN BASED ON WHICH ROW BUTTON WAS CLICKED
    let rowType = clickedRow;

    console.log("rtype", clickedRow);

    // CREATE THE VARIABLES THAT WE WILL PASS AS OUR NEW CARDS PROPERTY VALS
    let cardTitle;
    let cardDue;
    let cardDescription;
    let cardDate;
    let cardPriorityRank;
    let cardType;
    let cardID;

    // GET THE VALUE OF OUR NEW CARDS TITLE FROM THE NEW CARD FORM TITLE INPUT
    cardTitle = document.querySelector("#cardtitle");
    // GET THE VALUE OF OUR NEW CARDS TITLE FROM THE NEW CARD FORM TITLE INPUT
    cardDue = document.querySelector("#carddue");
    // GET THE VALUE OF OUR NEW CARDS DESCRIPTION FROM THE NEW CARD FORM DESCRIPTION INPUT
    cardDescription = document.querySelector("#carddescription");

    let dueArr = cardDue.value.split("-");

    let dDate = new Date(`${dueArr[0]},${dueArr[1]},${dueArr[2]},`).toString();
    console.log(dDate);

    dDate = dDate.split(" ");

    let cardDD = `${dDate[0]} ${dDate[1]} ${dDate[2]}`;

    // SET TODAYS DATE TO A VARIABLE
    let currentDate = new Date().toString();
    // TURN OUR currentDate VAR INTO AN ARRAY
    let dateArr = currentDate.split(" ");
    // GET THE FIRST FOUR INDEXES OF OUR dateArr dayofweek/month/date/year AND SET THEM AS OUR NEW CARDS DATE PROPERTY VALUE
    cardDate = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`;

    // CHECK rowType VAR TO SEE WHICH cardPriorityRank AND cardType VALUES WE SHOULD SET
    switch (rowType) {
      case "0":
        cardPriorityRank = "On Deck";
        cardType = 0;
        break;
      case "1":
        cardPriorityRank = "In Progress";
        cardType = 1;
        break;
      case "2":
        cardPriorityRank = "Review";
        cardType = 2;
        break;
      case "3":
        cardPriorityRank = "Complete";
        cardType = 3;
        break;
    }

    // TAKE OUR ESTABLISHED VARIABLES AND CREATE AN NEW INSTANCE OF OUR Cards OBJECTS
    newCard = Cards(
      cardTitle.value,
      cardDD,
      cardDescription.value,
      cardDate,
      cardPriorityRank,
      cardType
      //  cardID
    );

    // // ADD OUR NEW CARD TO THE CORRECT CORRESPONDING ARRAY
    switch (cardType) {
      case 0:
        cSpace.ondeck.push(newCard);
        break;
      case 1:
        cSpace.inprogress.push(newCard);
        break;
      case 2:
        cSpace.review.push(newCard);
        break;
      case 3:
        cSpace.complete.push(newCard);
        break;
    }

    Workspaces.workspacesArr[cSpace.id] = cSpace;

    WorkspaceFormHandler.AddToStorage(Workspaces.workspacesArr);

    // CLEAR INPUTS
    cardTitle.value = "";
    cardDue.value = "";
    cardDescription.value = "";
  }

  function changePriority(selectedPriority, cardIdentify, curSpace) {
    let updatedPriority = selectedPriority.target.dataset.op;
    let oldPriority = cardIdentify.target.dataset.cardtype;
    let curCard = cardIdentify.target.dataset.cardid;

    let updatedSpace;

    switch (oldPriority) {
      case "0":
        updatedSpace = curSpace.ondeck[curCard];
        curSpace.ondeck.splice(curCard, 1);
        updatedSpace.cardtype = updatedPriority;
        break;
      case "1":
        updatedSpace = curSpace.inprogress[curCard];
        curSpace.inprogress.splice(curCard, 1);
        updatedSpace.cardtype = updatedPriority;

        break;
      case "2":
        updatedSpace = curSpace.review[curCard];
        curSpace.review.splice(curCard, 1);
        updatedSpace.cardtype = updatedPriority;

        break;
      case "3":
        updatedSpace = curSpace.complete[curCard];
        curSpace.complete.splice(curCard, 1);
        updatedSpace.cardtype = updatedPriority;

        break;
    }

    switch (updatedPriority) {
      case "0":
        updatedSpace.priority = "On Deck";
        curSpace.ondeck.push(updatedSpace);
        break;
      case "1":
        updatedSpace.priority = "In Progress";
        curSpace.inprogress.push(updatedSpace);
        break;
      case "2":
        updatedSpace.priority = "Review";
        curSpace.review.push(updatedSpace);
        break;
      case "3":
        updatedSpace.priority = "Complete";
        curSpace.complete.push(updatedSpace);
        break;
    }

    Workspaces.workspacesArr[curSpace.id] = curSpace;

    WorkspaceFormHandler.AddToStorage(Workspaces.workspacesArr);

    WorkspacePages.PaintUI(curSpace.id);
  }

  function deleteCard(clickedCard, cardRow, currentSpace) {
    console.log(clickedCard, cardRow, currentSpace);

    switch (cardRow) {
      case "0":
        currentSpace.ondeck.splice(clickedCard, 1);
        break;
      case "1":
        currentSpace.inprogress.splice(clickedCard, 1);
        break;
      case "2":
        currentSpace.review.splice(clickedCard, 1);
        break;
      case "3":
        currentSpace.complete.splice(clickedCard, 1);
        break;
    }

    Workspaces.workspacesArr[currentSpace.id] = currentSpace;

    WorkspaceFormHandler.AddToStorage(Workspaces.workspacesArr);

    WorkspacePages.PaintUI(currentSpace.id);
  }

  function removeWorkspace(currentWS) {
    Workspaces.workspacesArr.splice(currentWS, 1);

    let num = 0;
    Workspaces.workspacesArr.forEach((ws) => {
      ws.id = num;
      num++;
    });

    WorkspaceFormHandler.AddToStorage(Workspaces.workspacesArr);

    WorkspaceFormHandler.AddToSidebar();

    let moveToPage = document.querySelector(".guide-btn");

    PageSwitch.activePage(moveToPage);
    PageSwitch.activePageBtn(moveToPage);

    // WorkspacePages.PaintUI(0);
  }

  return { createCard, changePriority, deleteCard, removeWorkspace };
})();

export { WorkspacePages };
