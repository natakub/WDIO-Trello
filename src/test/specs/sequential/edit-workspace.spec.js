// const { expect } = require("chai");
// const { pages } = require("../../../page");
// const { hooksBeforeEach, hooksAfter } = require("../../../support/hooks");
// const resources = require("../../../support/resources");

// describe("Trello editing workspace", () => {
//   beforeEach(hooksBeforeEach.loginAndOpenWorkspacePage);

//   describe("Update workspace name with valid characters", () => {
//     it("should update workspace name when edited using valid characters", async () => {
//       await pages(
//         "workspace"
//       ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//       const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//       await editWorkspaceForm
//         .input("name")
//         .waitAndAddValue(resources.testingInputValue);
//       await editWorkspaceForm.saveEditBtn.waitAndClick();

//       const workspaceInfo = await pages("workspace").workspaceInfo;
//       const workspaceName = await workspaceInfo.waitAndGetText(
//         workspaceInfo.workspaceName
//       );

//       //using chai Expect
//       await expect(workspaceName).to.have.string(resources.testingInputValue);
//     });

//     after(hooksAfter.after.resetWorkspaceName);
//   });

//   describe("Update workspace description with valid characters", () => {
//     it("should update workspace name when edited using valid characters", async () => {
//       await pages(
//         "workspace"
//       ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//       const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//       await editWorkspaceForm
//         .input("description")
//         .waitAndAddValue(resources.testingInputValue);
//       await editWorkspaceForm.saveEditBtn.waitAndClick();

//       const workspaceInfo = pages("workspace").workspaceInfo;
//       const workspaceDescription = await workspaceInfo.waitAndGetText(
//         workspaceInfo.workspaceDescription
//       );

//       //using chai Expect
//       await expect(
//         workspaceInfo.workspaceDescription,
//         "description did not exist"
//       ).to.exist;
//       await expect(workspaceDescription).to.equal(resources.testingInputValue);
//     });

//     after(hooksAfter.after.resetWorkspaceDescription);
//   });

//   describe("cancel workspace editing", async () => {
//     it("workspace name should remain unchanged when cancel edited changes", async () => {
//       const workspaceInfo = await pages("workspace").workspaceInfo;
//       const initialWorkspaceName = await workspaceInfo.waitAndGetText(
//         workspaceInfo.workspaceName
//       );

//       await pages(
//         "workspace"
//       ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//       const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//       await editWorkspaceForm
//         .input("description")
//         .waitAndAddValue(resources.testingInputValue);
//       await editWorkspaceForm.cancelEditBtn.waitAndClick();

//       const finalWorkspaceName = await workspaceInfo.waitAndGetText(
//         workspaceInfo.workspaceName
//       );

//       //using chai Expect
//       await expect(initialWorkspaceName).to.equal(
//         finalWorkspaceName,
//         "workspace name changed"
//       );
//       await expect(finalWorkspaceName).to.not.include(
//         resources.testingInputValue
//       );
//     });

//     afterEach(hooksAfter.afterEach.reload);
//   });
// });
