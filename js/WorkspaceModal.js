import { Modals } from "./Modals";

const WorkspaceModal = (() => {
  // DOM ELEMENTS WE NEED
  let addWorkspaceBtn = document.querySelector(".add-workspaces-btn");
  let exitFormBtn = document.querySelector(".exit-workspace-form");
  let workspaceFormContainer = document.querySelector(
    "#workspace-form-container"
  );

  // EVENTLISTENERS
  // On workspaces button click run our showModal function
  addWorkspaceBtn.addEventListener("click", () => {
    Modals.showModal(workspaceFormContainer, "noshow-workspace-modal");
  });

  // On form exit icon button click run our exitModal function
  exitFormBtn.addEventListener("click", () => {
    Modals.exitModal(workspaceFormContainer, "noshow-workspace-modal");
  });

  return { workspaceFormContainer };
})();

export { WorkspaceModal };
