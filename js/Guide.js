const GuidePage = (() => {
  let guideContent = document.createElement("div");

  guideContent.innerHTML = "<h1>GUIDE</h1>";

  return { guideContent };
})();

export { GuidePage };
