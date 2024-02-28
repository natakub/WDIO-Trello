// const { browser } = require("@wdio/globals");
// const { expect } = require("chai");
// const { pages } = require("../../../page");

// describe("Trello editing workspace", () => {
//   beforeEach("loggin into the account and open workspace", async () => {
//     await pages("login").open();
//     await pages("login").loginForm.performLogin(
//       process.env.EMAIL,
//       process.env.PASSWORD
//     );

//     // Open user workspace page
//     await browser.newWindow("https://trello.com/w/testworkspace04649910");
//     await pages("workspace").loggedoutHeader.waitForExist(undefined, true);
//     await pages("workspace").header.memberIcon.waitForDisplayed();
//   });

//   describe("Update workspace name with valid characters", () => {
//     it("should update workspace name when edited using valid characters", async () => {
//       await pages(
//         "workspace"
//       ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//       const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//       await editWorkspaceForm.input("name").waitAndAddValue("testing");
//       await editWorkspaceForm.saveEditBtn.waitAndClick();

//       const workspaceName = await pages(
//         "workspace"
//       ).workspaceInfo.workspaceName.getText();

//       //using chai Expect
//       await expect(workspaceName).to.have.string("testing");
//     });

//     after("reset the changes", async () => {
//       await pages(
//         "workspace"
//       ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//       const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//       await editWorkspaceForm.eraseInputValues(
//         editWorkspaceForm.input("name"),
//         7
//       );
//       await editWorkspaceForm.saveEditBtn.waitAndClick();
//       await pages("workspace").workspaceInfo.workspaceName.waitForDisplayed();
//     });
//   });

//   describe("Update workspace description with valid characters", () => {
//     it("should update workspace name when edited using valid characters", async () => {
//       await pages(
//         "workspace"
//       ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//       const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//       await editWorkspaceForm.input("description").waitAndAddValue("testing");
//       await editWorkspaceForm.saveEditBtn.waitAndClick();

//       const workspaceDescription =
//         pages("workspace").workspaceInfo.workspaceDescription;
//       await workspaceDescription.waitForDisplayed();
//       const getDescription = await workspaceDescription.getText();

//       //using chai Expect
//       await expect(workspaceDescription, "description did not exist").to.exist;
//       await expect(getDescription).to.equal("testing");
//     });

//     after("reset the changes", async () => {
//       await pages(
//         "workspace"
//       ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//       const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//       await editWorkspaceForm.eraseInputValues(
//         editWorkspaceForm.input("description"),
//         7
//       );
//       await editWorkspaceForm.saveEditBtn.waitAndClick();
//       await pages("workspace").workspaceInfo.workspaceName.waitForDisplayed();
//     });
//   });

//   it("workspace name should remain unchanged when cancel edited changes", async () => {
//     const workspaceNameElement = pages("workspace").workspaceInfo.workspaceName;
//     await workspaceNameElement.waitForDisplayed();
//     const initialWorkspaceName = await workspaceNameElement.getText();

//     await pages(
//       "workspace"
//     ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

//     const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
//     await editWorkspaceForm.input("description").waitAndAddValue("testing");
//     await editWorkspaceForm.cancelEditBtn.waitAndClick();

//     await workspaceNameElement.waitForDisplayed();
//     const finalWorkspaceName = await workspaceNameElement.getText();

//     //using chai Expect
//     await expect(initialWorkspaceName).to.equal(
//       finalWorkspaceName,
//       "workspace name changed"
//     );
//     await expect(finalWorkspaceName).to.not.include("testing");
//   });
// });
