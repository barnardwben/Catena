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

  let firstVid = document.createElement("video");
  firstVid.classList.add("videos");
  firstVid.src = "/videos/cwguide1.mp4";
  firstVid.style.width = "700px";
  firstVid.style.height = "394px";
  firstVid.setAttribute("frameborder", "0");
  firstVid.setAttribute("autoplay", "0");
  firstVid.setAttribute("controls", "");

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

  let secondVid = document.createElement("video");
  secondVid.classList.add("videos");
  secondVid.src = "/videos/ccguide.mp4";
  secondVid.style.width = "700px";
  secondVid.style.height = "394px";
  secondVid.setAttribute("frameborder", "0");
  secondVid.setAttribute("autoplay", "false");

  guideTwo.appendChild(secondVid);

  let guideThree = document.createElement("div");
  guideThree.classList.add("guide-three", "all-guides");

  guidesContainer.appendChild(guideThree);

  let guideThreeHeaderThree = document.createElement("h3");
  guideThreeHeaderThree.classList.add("guide-heads");
  guideThreeHeaderThree.id = "move-ws-card";
  guideThreeHeaderThree.textContent = "Moving Workspace Cards";

  guideThree.appendChild(guideThreeHeaderThree);

  let guideThreeDescriptionThree = document.createElement("p");
  guideThreeDescriptionThree.classList.add("guide-desc");
  guideThreeDescriptionThree.innerHTML =
    '<h4>I created some cards, now what?</h4> To keep your workspaces clean and organized you can order your cards by 4 types - "On Deck", "In Progress", "Review", and "Complete". This will come in handy when you leave your workspace and come back to it later. This way you\'ll know what card needs what type of attention. <br><br> To move your card from one type to another, first go to your card and look in the bottom right corner to see what it\'s current row type is. Next click on the cards row type button in the right corner to open up a dropdown menu. From the menu choose the row you would like to move your card to. Your card will then instantaneously reposition itselt to the new row. <br> <br> Moving cards is simple, you can go back and forth between rows so give it a try. If you need a visual reference watch the video below to see a recorded example.';

  guideThree.appendChild(guideThreeDescriptionThree);

  let thirdVid = document.createElement("iframe");
  thirdVid.classList.add("videos");
  thirdVid.src = "/videos/mcguide.mp4";
  thirdVid.style.width = "700px";
  thirdVid.style.height = "394px";
  thirdVid.setAttribute("frameborder", "0");
  thirdVid.setAttribute("autoplay", "");

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
    '<h4>I have unwanted cards in my workspace, can I remove them?</h4> Once you have completed your cards goals, or no longer need a card you can remove it from your workspace to make room for additional cards. Removing cards can be done with a simple click on the cards <i class="fas fa-trash-alt guide-trash"></i> icon. Keep in mind that once you delete a card it is gone forever, so be sure that you are ready to delete a card before actually doing so. <br> <br>  If you need a visual reference watch the video below to see a recorded example.';

  guideFour.appendChild(guideFourDescriptionFour);

  let fourthVid = document.createElement("iframe");
  fourthVid.classList.add("videos");
  fourthVid.src = "/videos/dcguide.mp4";
  fourthVid.style.width = "700px";
  fourthVid.style.height = "394px";
  fourthVid.setAttribute("frameborder", "0");
  fourthVid.setAttribute("autoplay", "");

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
    '<h4>Finished with your workspace?</h4> Once you have completed your workspaces purpose, or no longer find the workspace of use to you then you can remove it from your list of workspaces. Removing workspaces is the same as removing cards from your workspace. Locate the <i class="fas fa-trash-alt guide-trash"></i> icon to the right of your workspaces title and simply click to delete. Keep in mind that once you delete a workspace there is no going back, so be sure that you are ready to delete a workspace before actually doing so. <br> <br>  If you need a visual reference watch the video below to see a recorded example.';

  guideFive.appendChild(guideFiveDescriptionFive);

  let fifthVid = document.createElement("iframe");
  fifthVid.classList.add("videos");
  fifthVid.src = "/videos/dwsguide.mp4";
  fifthVid.style.width = "700px";
  fifthVid.style.height = "394px";
  fifthVid.setAttribute("frameborder", "0");
  fifthVid.setAttribute("autoplay", "");

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
    '<h4>Why would I want a to-do list when I already have workspaces?</h4> Having the option to create a to-do list over a workspace is geared towards keeping your tasks organized and helping you to avoid building workspaces that become a mess of miscellaneous items. It is also good brain training for compartmentalizing your goals. Before creating a to-do item, consider if it is a simple task like walking your dog or if it\'s something that will include many smaller steps to acheive the goal. If it is a simple task then that would be an item to put into your to-do list rather than creating a workspace for something so small.<br><br>To start creating to-do items, you\'ll need to first go to your "To-Do" page. On the page you\'ll see the <button class="guide-add-todo">Add To-Do</button> button below the page header. Click this button to open up the "Create A To-Do Item" modal. In the modal you will be asked to fill in a title, short description, and a due date for completing the to-do item. After you\'ve filled in the necessary input fields, click "Add To-Do". Now you\'ll see your newly created item in your list of to-do\'s <br> <br> Creating a to-do list is a great way to clear your mind and keep track of all the various tasks you need to complete. If you need a visual reference watch the video below to see a recorded example.';

  guideSix.appendChild(guideSixDescriptionSix);

  let sixthVid = document.createElement("iframe");
  sixthVid.classList.add("videos");
  sixthVid.src = "/videos/ctdguide.mp4";
  sixthVid.style.width = "700px";
  sixthVid.style.height = "394px";
  sixthVid.setAttribute("frameborder", "0");
  sixthVid.setAttribute("autoplay", "");

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
    '<h4>I made a mistake on one of my to-do items, should I delete and start again?</h4> There\'s no need to delete a to-do item, unless you\'ve completed that to do. If you created a to-do item, but now need to change the due date or the other content of your to-do we can easily acheive this by using the editing option. <br><br> Locate the <i class="fas fa-edit guide-edit-todo"></i> icon on the right side of your to-do item. Clicking on the button will open up the edit to-do modal with your to-do items content filled in. From there you can make any desired changes to your item. Once you\'ve made your edits click the "Update To-Do" button to initialize your edits. Now you will see your to-do item with all your updates. <br> <br> Editing to-do items is much easier than deleting and starting your to-do from scratch. If you need a visual reference watch the video below to see a recorded example.';

  guideSeven.appendChild(guideSevenDescriptionSeven);

  let seventhVid = document.createElement("iframe");
  seventhVid.classList.add("videos");
  seventhVid.src = "/videos/etdguide.mp4";
  seventhVid.style.width = "700px";
  seventhVid.style.height = "394px";
  seventhVid.setAttribute("frameborder", "0");
  seventhVid.setAttribute("autoplay", "");

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
    '<h4>Completed a to-do?</h4> Once you have completed a to-do item, or no longer need it then you can remove it from your list of to-do\'s. Removing to-do items is the same as removing cards or workspaces. Locate the <i class="fas fa-trash-alt guide-trash"></i> icon on the right side of your to-do and simply click to delete. Keep in mind that once you delete a to-do it will be permanently removed from the list, so before deleting be sure that you are ready to remove the item for good. <br> <br>  If you need a visual reference watch the video below to see a recorded example.';

  guideEight.appendChild(guideEightDescriptionEight);

  let eighthVid = document.createElement("iframe");
  eighthVid.classList.add("videos");
  eighthVid.src = "/videos/dtdguide.mp4";
  eighthVid.style.width = "700px";
  eighthVid.style.height = "394px";
  eighthVid.setAttribute("frameborder", "0");
  eighthVid.setAttribute("autoplay", "");

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
    '<h4>My list of to-do items has grown a bit large, is there a way to find the to-do items that I need to complete right away or in the near future?</h4> If you need to view your high priority to-do items then you have two options. Option one will show you your to-do items that are due today. Option two will retrieve any to-do item that is due within the next three days. Each option has its own dedicated page and can be accessed from the left sidebar. <br><br> For items that are due today locate the <i class="fas fa-star sb-filter-btns" style="color: gold;"></i> icon near the top of the sidebar. Clicking on this link will lead you to a page with all of today\'s to-do items. Similarily you can find all the upcoming to-do items by locating the <i class="fas fa-calendar-alt sb-filter-btns" style="color: red;"></i> icon right below the "Today" link.  <br> <br> Having access to your high priority to-do items is important for staying on top of things. If you need a visual reference watch the video below to see a recorded example.';

  guideNine.appendChild(guideNineDescriptionNine);

  let ninthVid = document.createElement("iframe");
  ninthVid.classList.add("videos");
  ninthVid.src = "/videos/tutdguide.mp4";
  ninthVid.style.width = "700px";
  ninthVid.style.height = "394px";
  ninthVid.setAttribute("frameborder", "0");
  ninthVid.setAttribute("autoplay", "");

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
    'Research shows that writing down one\'s thoughts can greatly improve your minds clarity, memory and give your brain room for growth to create new neurons that hold connections to important information. With the journal section of the application your given a space to write down any thoughts, new ideas, or reflections that you can come back to later. <br><br> To create a new journal entry you\'ll first want to go to the Jouranl page by click the link in the left sidebar. Once you\'re on the page you will notice a large <i class="fas fa-book-medical guide-jr-add"></i> icon. Clicking this will bring up the "Create Journal" modal. In the modal you can add a title and the content of your journal. Once you\'re finished, you can click the "Post Journal" button to add the new journal to your journals page.  <br> <br> Creating journals is a great way to declutter your mind. If you need a visual reference watch the video below to see a recorded example.';

  guideTen.appendChild(guideTenDescriptionTen);

  let tenthVid = document.createElement("iframe");
  tenthVid.classList.add("videos");
  tenthVid.src = "/videos/cjrguide.mp4";
  tenthVid.style.width = "700px";
  tenthVid.style.height = "394px";
  tenthVid.setAttribute("frameborder", "0");
  tenthVid.setAttribute("autoplay", "");

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
    '<h4>I\'d like to add some thoughts to a specific journal entry, is this possible?</h4> Updating your journals is a good idea when you would like to rehash some ideas or give yourself more insight on your journals subject matter. First step to updating your journal is by clicking the <i class="fas fa-file-alt guide-jr-file"></i> icon to open up the journal. Once you\'re in "Read Journal" mode you will want to locate the <i class="fas fa-edit guide-edit-todo"></i> icon to the right of your journals title. Clicking on this will open up a modal that is prepopulated with your journals content. From there you can make any desired updates. Once your done you can initialize the update by click the "Update Journal" button. Now when you open up the journal you will see you\'re revised version. <br> <br> Editing journals comes in handy when you have additional thoughts or ideas to add to the content. If you need a visual reference watch the video below to see a recorded example.';

  guideEleven.appendChild(guideElevenDescriptionEleven);

  let eleventhVid = document.createElement("iframe");
  eleventhVid.classList.add("videos");
  eleventhVid.src = "/videos/ejrguide.mp4";
  eleventhVid.style.width = "700px";
  eleventhVid.style.height = "394px";
  eleventhVid.setAttribute("frameborder", "0");
  eleventhVid.setAttribute("autoplay", "");

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
    '<h4>I want to remove a journal, is this possible?</h4> Removing journals is the same as removing cards or workspaces. After opening your journal locate the <i class="fas fa-trash-alt guide-trash"></i> icon to the right side of your journals title and simply click to delete. Keep in mind that once you delete a journal it will be permanently removed from your journals page, so before deleting be sure that you are ready to remove the item for good. <br> <br>  If you need a visual reference watch the video below to see a recorded example.';

  guideTwelve.appendChild(guideTwelveDescriptionTwelve);

  let twelfthVid = document.createElement("iframe");
  twelfthVid.classList.add("videos");
  twelfthVid.src = "/videos/djrguide.mp4";
  twelfthVid.style.width = "700px";
  twelfthVid.style.height = "394px";
  twelfthVid.setAttribute("frameborder", "0");
  twelfthVid.setAttribute("autoplay", "");

  guideTwelve.appendChild(twelfthVid);

  return { guideContent };
})();

export { GuidePage };
