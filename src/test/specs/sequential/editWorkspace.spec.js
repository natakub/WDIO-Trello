const { expect, browser } = require("@wdio/globals");
const { pages } = require("../../../page");

describe("Trello editing workspace", () => {
  before("loggin into the account and open workspace", async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
    );

    // Open user workspace page
    await browser.newWindow("https://trello.com/w/testworkspace04649910");
    await pages("workspace").loggedoutHeader.waitForExist(undefined, true);
    await pages("workspace").header.memberIcon.waitForDisplayed();
  });

  describe("Update workspace name with valid characters", () => {
    it("should update workspace name when edited using valid characters", async () => {
      await pages(
        "workspace"
      ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

      const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
      await editWorkspaceForm.input("name").waitAndAddValue("testing");
      await editWorkspaceForm.saveEditBtn.waitAndClick();

      await expect(
        pages("workspace").workspaceInfo.workspaceName
      ).toHaveTextContaining("testing");
    });

    after("reset the changes", async () => {
      await pages(
        "workspace"
      ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

      const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
      await editWorkspaceForm.eraseInputValues(
        editWorkspaceForm.input("name"),
        7
      );
      await editWorkspaceForm.saveEditBtn.waitAndClick();
      await pages("workspace").workspaceInfo.workspaceName.waitForDisplayed();
    });
  });

  describe("Update workspace description with valid characters", () => {
    it("should update workspace name when edited using valid characters", async () => {
      await pages(
        "workspace"
      ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

      const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
      await editWorkspaceForm.input("description").waitAndAddValue("testing");
      await editWorkspaceForm.saveEditBtn.waitAndClick();

      const workspaceDescription =
        pages("workspace").workspaceInfo.workspaceDescription;
      await workspaceDescription.waitForDisplayed();

      await expect(workspaceDescription).toExist();
      await expect(workspaceDescription).toHaveText("testing");
    });

    after("reset the changes", async () => {
      await pages(
        "workspace"
      ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

      const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
      await editWorkspaceForm.eraseInputValues(
        editWorkspaceForm.input("description"),
        7
      );
      await editWorkspaceForm.saveEditBtn.waitAndClick();
      await pages("workspace").workspaceInfo.workspaceName.waitForDisplayed();
    });
  });

  it("workspace name should remain unchanged when cancel edited changes", async () => {
    const workspaceNameElement = pages("workspace").workspaceInfo.workspaceName;
    await workspaceNameElement.waitForDisplayed();
    const initialWorkspaceName = await workspaceNameElement.getText();

    await pages(
      "workspace"
    ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

    const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
    await editWorkspaceForm.input("description").waitAndAddValue("testing");
    await editWorkspaceForm.cancelEditBtn.waitAndClick();

    await workspaceNameElement.waitForDisplayed();
    const finalWorkspaceName = await workspaceNameElement.getText();

    await expect(initialWorkspaceName).toBe(finalWorkspaceName);
    await expect(
      pages("workspace").workspaceInfo.workspaceName
    ).not.toHaveTextContaining("testing");
  });
});
