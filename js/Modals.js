const Modals = (() => {
  // FUNCTIONS
  // Add function that pops up our modal
  function showModal(element, className) {
    element.classList.remove(className);
  }

  // Add function that exits our modal
  function exitModal(element, className) {
    element.classList.add(className);
  }
  return { showModal, exitModal };
})();

export { Modals };
