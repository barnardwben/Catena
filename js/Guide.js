const GuidePage = (() => {
  let guideContent = document.createElement("div");
  guideContent.classList.add("guide-content");

  let rightSidebar = document.createElement("div");
  rightSidebar.classList.add("right-sidebar");

  let rightLinkContainer = document.createElement("div");
  rightLinkContainer.classList.add("right-link-container");

  rightSidebar.appendChild(rightLinkContainer);

  let links = [
    { title: "Create New Workspace", id: "#add-workspace" },
    { title: "Add Card To Workspace", id: "#add-card-workspace" },
    { title: "Moving Workspace Cards", id: "#move-ws-cards" },
    { title: "Deleting Cards", id: "#delete-ws-card" },
    { title: "Deleting Workspaces", id: "#delete-ws" },
    { title: "Creating To-Do Items", id: "#create-todo" },
    { title: "Editing To-Do Items", id: "#edit-todo" },
    { title: "Deleting To-Do Items", id: "#delete-todo" },
    { title: "Today/Upcoming To-Do", id: "#tu-todo" },
    { title: "Creating Journals", id: "#create-journal" },
    { title: "Editing Journals", id: "#edit-journal" },
    { title: "Deleting Journals", id: "#delete-journal" },
  ];

  links.forEach((link) => {
    let newLink = document.createElement("a");
    newLink.classList.add("r-s-links");
    newLink.innerHTML = `${link.title}`;
    newLink.href = `${link.id}`;

    rightLinkContainer.appendChild(newLink);
  });

  let guidePageHeader = document.createElement("h1");
  guidePageHeader.textContent = "Guides";

  let guidePageDescription = document.createElement("p");
  guidePageDescription.textContent =
    "Use guides below to make navigating the application easier";

  guideContent.appendChild(rightSidebar);
  guideContent.appendChild(guidePageHeader);
  guideContent.appendChild(guidePageDescription);

  let guidesSection = document.createElement("section");
  guidesSection.classList.add("guides-section");

  guideContent.appendChild(guidesSection);

  let guidesContainer = document.createElement("div");
  guidesContainer.classList.add("guides-container");

  guidesSection.appendChild(guidesContainer);

  let guideOne = document.createElement("div");
  guideOne.classList.add("guide-one", "all-guides");

  guidesContainer.appendChild(guideOne);

  let guideOneHeaderOne = document.createElement("h3");
  guideOneHeaderOne.classList.add("guide-heads", "first-guide-head");
  guideOneHeaderOne.id = "add-workspace";
  guideOneHeaderOne.textContent = "Create New Workspace";

  guideOne.appendChild(guideOneHeaderOne);

  let guideOneDescriptionOne = document.createElement("p");
  guideOneDescriptionOne.classList.add("guide-desc");
  guideOneDescriptionOne.innerHTML =
    '<h4>When to create a workspace?</h4> Consider the goal you have in mind, does it have smaller tasks that need to be completed in order to reach that goal? If so then that would constitute as a good reason to create a new workspace. <br> <br> Let\'s use Learning Japanese as our example workspace since there are many smaller tasks that need to be done to learn the language. We can start by going over to the sidebar and clicking on the "Workspace" keyword. Doing this will pop-up our Workspace Modal where we will begin creating our workspace. Inside the modal you can add a title, in our case that will be "Learning Japanese". Once you have the title picked out you\'ll want to write a short description explaining what the purpose of the workspace is for, so something along the lines of "This workspace is for organizing and completing tasks related to learning the Japanese language". Now click the "Add Workspace" button and BAM our new workspace is created. <br> <br>  If you need a visual reference watch the video below to see a recorded example.';

  guideOne.appendChild(guideOneDescriptionOne);

  let firstVid = document.createElement("iframe");
  firstVid.classList.add("videos");
  firstVid.src = "/videos/cwguide1.mp4";
  firstVid.style.width = "700px";
  firstVid.style.height = "394px";
  firstVid.setAttribute("frameborder", "0");

  guideOne.appendChild(firstVid);

  let guideTwo = document.createElement("div");
  guideTwo.classList.add("guide-two", "all-guides");

  guidesContainer.appendChild(guideTwo);

  let guideTwoHeaderTwo = document.createElement("h3");
  guideTwoHeaderTwo.classList.add("guide-heads");
  guideTwoHeaderTwo.id = "add-card-workspace";
  guideTwoHeaderTwo.textContent = "Add Card To Workspace";

  guideTwo.appendChild(guideTwoHeaderTwo);

  let guideTwoDescriptionTwo = document.createElement("p");
  guideTwoDescriptionTwo.classList.add("guide-desc");
  guideTwoDescriptionTwo.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideTwo.appendChild(guideTwoDescriptionTwo);

  let secondVid = document.createElement("iframe");
  secondVid.classList.add("videos");
  secondVid.src = "/videos/ccguide.mp4";
  secondVid.style.width = "700px";
  secondVid.style.height = "394px";
  secondVid.setAttribute("frameborder", "0");

  guideTwo.appendChild(secondVid);

  let guideThree = document.createElement("div");
  guideThree.classList.add("guide-three", "all-guides");

  guidesContainer.appendChild(guideThree);

  let guideThreeHeaderThree = document.createElement("h3");
  guideThreeHeaderThree.classList.add("guide-heads");
  guideThreeHeaderThree.id = "move-ws-card";
  guideThreeHeaderThree.textContent = "Move Workspace Cards";

  guideThree.appendChild(guideThreeHeaderThree);

  let guideThreeDescriptionThree = document.createElement("p");
  guideThreeDescriptionThree.classList.add("guide-desc");
  guideThreeDescriptionThree.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideThree.appendChild(guideThreeDescriptionThree);

  let thirdVid = document.createElement("iframe");
  thirdVid.classList.add("videos");
  thirdVid.src = "/videos/mcguide.mp4";
  thirdVid.style.width = "700px";
  thirdVid.style.height = "394px";
  thirdVid.setAttribute("frameborder", "0");

  guideThree.appendChild(thirdVid);

  let guideFour = document.createElement("div");
  guideFour.classList.add("guide-four", "all-guides");

  guidesContainer.appendChild(guideFour);

  let guideFourHeaderFour = document.createElement("h3");
  guideFourHeaderFour.classList.add("guide-heads");
  guideFourHeaderFour.id = "delete-ws-card";
  guideFourHeaderFour.textContent = "Deleting Cards";

  guideFour.appendChild(guideFourHeaderFour);

  let guideFourDescriptionFour = document.createElement("p");
  guideFourDescriptionFour.classList.add("guide-desc");
  guideFourDescriptionFour.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideFour.appendChild(guideFourDescriptionFour);

  let fourthVid = document.createElement("iframe");
  fourthVid.classList.add("videos");
  fourthVid.src = "/videos/dcguide.mp4";
  fourthVid.style.width = "700px";
  fourthVid.style.height = "394px";
  fourthVid.setAttribute("frameborder", "0");

  guideFour.appendChild(fourthVid);

  let guideFive = document.createElement("div");
  guideFive.classList.add("guide-five", "all-guides");

  guidesContainer.appendChild(guideFive);

  let guideFiveHeaderFive = document.createElement("h3");
  guideFiveHeaderFive.classList.add("guide-heads");
  guideFiveHeaderFive.id = "delete-ws";
  guideFiveHeaderFive.textContent = "Deleting Workspaces";

  guideFive.appendChild(guideFiveHeaderFive);

  let guideFiveDescriptionFive = document.createElement("p");
  guideFiveDescriptionFive.classList.add("guide-desc");
  guideFiveDescriptionFive.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideFive.appendChild(guideFiveDescriptionFive);

  let fifthVid = document.createElement("iframe");
  fifthVid.classList.add("videos");
  fifthVid.src = "/videos/dwsguide.mp4";
  fifthVid.style.width = "700px";
  fifthVid.style.height = "394px";
  fifthVid.setAttribute("frameborder", "0");

  guideFive.appendChild(fifthVid);

  let guideSix = document.createElement("div");
  guideSix.classList.add("guide-six", "all-guides");

  guidesContainer.appendChild(guideSix);

  let guideSixHeaderSix = document.createElement("h3");
  guideSixHeaderSix.classList.add("guide-heads");
  guideSixHeaderSix.id = "create-todo";
  guideSixHeaderSix.textContent = "Creating To-Do Items";

  guideSix.appendChild(guideSixHeaderSix);

  let guideSixDescriptionSix = document.createElement("p");
  guideSixDescriptionSix.classList.add("guide-desc");
  guideSixDescriptionSix.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideSix.appendChild(guideSixDescriptionSix);

  let sixthVid = document.createElement("iframe");
  sixthVid.classList.add("videos");
  sixthVid.src = "/videos/ctdguide.mp4";
  sixthVid.style.width = "700px";
  sixthVid.style.height = "394px";
  sixthVid.setAttribute("frameborder", "0");

  guideSix.appendChild(sixthVid);

  let guideSeven = document.createElement("div");
  guideSeven.classList.add("guide-seven", "all-guides");

  guidesContainer.appendChild(guideSeven);

  let guideSevenHeaderSeven = document.createElement("h3");
  guideSevenHeaderSeven.classList.add("guide-heads");
  guideSevenHeaderSeven.id = "edit-todo";
  guideSevenHeaderSeven.textContent = "Editing To-Do Items";

  guideSeven.appendChild(guideSevenHeaderSeven);

  let guideSevenDescriptionSeven = document.createElement("p");
  guideSevenDescriptionSeven.classList.add("guide-desc");
  guideSevenDescriptionSeven.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideSeven.appendChild(guideSevenDescriptionSeven);

  let seventhVid = document.createElement("iframe");
  seventhVid.classList.add("videos");
  seventhVid.src = "/videos/etdguide.mp4";
  seventhVid.style.width = "700px";
  seventhVid.style.height = "394px";
  seventhVid.setAttribute("frameborder", "0");

  guideSeven.appendChild(seventhVid);

  let guideEight = document.createElement("div");
  guideEight.classList.add("guide-eight", "all-guides");

  guidesContainer.appendChild(guideEight);

  let guideEightHeaderEight = document.createElement("h3");
  guideEightHeaderEight.classList.add("guide-heads");
  guideEightHeaderEight.id = "deleting-todo";
  guideEightHeaderEight.textContent = "Deleting To-Do Items";

  guideEight.appendChild(guideEightHeaderEight);

  let guideEightDescriptionEight = document.createElement("p");
  guideEightDescriptionEight.classList.add("guide-desc");
  guideEightDescriptionEight.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideEight.appendChild(guideEightDescriptionEight);

  let eighthVid = document.createElement("iframe");
  eighthVid.classList.add("videos");
  eighthVid.src = "/videos/dtdguide.mp4";
  eighthVid.style.width = "700px";
  eighthVid.style.height = "394px";
  eighthVid.setAttribute("frameborder", "0");

  guideEight.appendChild(eighthVid);

  let guideNine = document.createElement("div");
  guideNine.classList.add("guide-nine", "all-guides");

  guidesContainer.appendChild(guideNine);

  let guideNineHeaderNine = document.createElement("h3");
  guideNineHeaderNine.classList.add("guide-heads");
  guideNineHeaderNine.id = "tu-todo";
  guideNineHeaderNine.textContent = "Today/Upcoming To-Do Items";

  guideNine.appendChild(guideNineHeaderNine);

  let guideNineDescriptionNine = document.createElement("p");
  guideNineDescriptionNine.classList.add("guide-desc");
  guideNineDescriptionNine.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideNine.appendChild(guideNineDescriptionNine);

  let ninthVid = document.createElement("iframe");
  ninthVid.classList.add("videos");
  ninthVid.src = "/videos/tutdguide.mp4";
  ninthVid.style.width = "700px";
  ninthVid.style.height = "394px";
  ninthVid.setAttribute("frameborder", "0");

  guideNine.appendChild(ninthVid);

  let guideTen = document.createElement("div");
  guideTen.classList.add("guide-ten", "all-guides");

  guidesContainer.appendChild(guideTen);

  let guideTenHeaderTen = document.createElement("h3");
  guideTenHeaderTen.classList.add("guide-heads");
  guideTenHeaderTen.id = "create-journal";
  guideTenHeaderTen.textContent = "Creating Journals";

  guideTen.appendChild(guideTenHeaderTen);

  let guideTenDescriptionTen = document.createElement("p");
  guideTenDescriptionTen.classList.add("guide-desc");
  guideTenDescriptionTen.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideTen.appendChild(guideTenDescriptionTen);

  let tenthVid = document.createElement("iframe");
  tenthVid.classList.add("videos");
  tenthVid.src = "/videos/cjrguide.mp4";
  tenthVid.style.width = "700px";
  tenthVid.style.height = "394px";
  tenthVid.setAttribute("frameborder", "0");

  guideTen.appendChild(tenthVid);

  let guideEleven = document.createElement("div");
  guideEleven.classList.add("guide-eleven", "all-guides");

  guidesContainer.appendChild(guideEleven);

  let guideElevenHeaderEleven = document.createElement("h3");
  guideElevenHeaderEleven.classList.add("guide-heads");
  guideElevenHeaderEleven.id = "edit-journal";
  guideElevenHeaderEleven.textContent = "Editing Journals";

  guideEleven.appendChild(guideElevenHeaderEleven);

  let guideElevenDescriptionEleven = document.createElement("p");
  guideElevenDescriptionEleven.classList.add("guide-desc");
  guideElevenDescriptionEleven.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideEleven.appendChild(guideElevenDescriptionEleven);

  let eleventhVid = document.createElement("iframe");
  eleventhVid.classList.add("videos");
  eleventhVid.src = "/videos/ejrguide.mp4";
  eleventhVid.style.width = "700px";
  eleventhVid.style.height = "394px";
  eleventhVid.setAttribute("frameborder", "0");

  guideEleven.appendChild(eleventhVid);

  let guideTwelve = document.createElement("div");
  guideTwelve.classList.add("guide-twelve", "all-guides");

  guidesContainer.appendChild(guideTwelve);

  let guideTwelveHeaderTwelve = document.createElement("h3");
  guideTwelveHeaderTwelve.classList.add("guide-heads");
  guideTwelveHeaderTwelve.id = "delete-journal";
  guideTwelveHeaderTwelve.textContent = "Deleting Journals";

  guideTwelve.appendChild(guideTwelveHeaderTwelve);

  let guideTwelveDescriptionTwelve = document.createElement("p");
  guideTwelveDescriptionTwelve.classList.add("guide-desc");
  guideTwelveDescriptionTwelve.innerHTML =
    "The purpose of a workspace is to make organizing and completing your goals easier to do. In order to acheive this you need to create separate cards in your workspaces that each have their own individual aim. <br> <br> For example, if you're overall mission is to learn Japanese it would be best to break that up into smaller pieces to acheive the whole. One of the first things Japanese learners have to do is learn the Kana. Kana are broken up into Hiragana and Katakana, so creating two individual cards for the Kana would be a wise thing to do. Start by clicking the 'On Deck' row to open up the Create Card Modal. Fill in the title of the card, in our case that will be either 'Hiragana' or  'Katakana'. Next choose an appropriate due date that you would like to acheive this task by. Finally add a short description that briefly explains the goal of the card. Voila, you just created your first card.  <br> <br> Adding  cards to your workspaces is a simple task. If you need a visual reference watch the video below to see a recorded example.";

  guideTwelve.appendChild(guideTwelveDescriptionTwelve);

  let twelfthVid = document.createElement("iframe");
  twelfthVid.classList.add("videos");
  twelfthVid.src = "/videos/djrguide.mp4";
  twelfthVid.style.width = "700px";
  twelfthVid.style.height = "394px";
  twelfthVid.setAttribute("frameborder", "0");

  guideTwelve.appendChild(twelfthVid);

  return { guideContent };
})();

export { GuidePage };
