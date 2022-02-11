const TodayPage = (() => {
  let todayContent = document.createElement("div");

  todayContent.innerHTML = "<h1>Today</h1>";

  return { todayContent };
})();

export { TodayPage };
