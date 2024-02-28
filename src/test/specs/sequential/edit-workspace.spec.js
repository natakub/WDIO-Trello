const { browser } = require("@wdio/globals");
const { expect } = require("chai");
const { pages } = require("../../../page");
const { hooksBeforeEach, hooksAfter } = require("../../../support/hooks");
const resources = require("../../../support/resources");

describe("Trello editing workspace", () => {
  beforeEach(hooksBeforeEach.loginAndOpenWorkspacePage);

  describe("Update workspace name with valid characters", () => {
    it("should update workspace name when edited using valid characters", async () => {
      await pages(
        "workspace"
      ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

      const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
      await editWorkspaceForm
        .input("name")
        .waitAndAddValue(resources.testingInputValue);
      await editWorkspaceForm.saveEditBtn.waitAndClick();

      const workspaceName = await pages(
        "workspace"
      ).workspaceInfo.workspaceName.getText();

      //using chai Expect
      await expect(workspaceName).to.have.string(resources.testingInputValue);
    });

    after(hooksAfter.after.resetWorkspaceName);
  });

  describe("Update workspace description with valid characters", () => {
    it("should update workspace name when edited using valid characters", async () => {
      await pages(
        "workspace"
      ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

      const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
      await editWorkspaceForm
        .input("description")
        .waitAndAddValue(resources.testingInputValue);
      await editWorkspaceForm.saveEditBtn.waitAndClick();

      const workspaceDescription =
        pages("workspace").workspaceInfo.workspaceDescription;
      await workspaceDescription.waitForDisplayed();
      const getDescription = await workspaceDescription.getText();

      //using chai Expect
      await expect(workspaceDescription, "description did not exist").to.exist;
      await expect(getDescription).to.equal(resources.testingInputValue);
    });

    after(hooksAfter.after.resetWorkspaceDescription);
  });

  describe("cancel workspace editing", async () => {
    it("workspace name should remain unchanged when cancel edited changes", async () => {
      const workspaceNameElement =
        pages("workspace").workspaceInfo.workspaceName;
      await workspaceNameElement.waitForDisplayed();
      const initialWorkspaceName = await workspaceNameElement.getText();

      await pages(
        "workspace"
      ).workspaceInfo.openEditWorkspaceFormBtn.waitAndClick();

      const editWorkspaceForm = await pages("workspace").editWorkspaceForm;
      await editWorkspaceForm
        .input("description")
        .waitAndAddValue(resources.testingInputValue);
      await editWorkspaceForm.cancelEditBtn.waitAndClick();

      await workspaceNameElement.waitForDisplayed();
      const finalWorkspaceName = await workspaceNameElement.getText();

      //using chai Expect
      await expect(initialWorkspaceName).to.equal(
        finalWorkspaceName,
        "workspace name changed"
      );
      await expect(finalWorkspaceName).to.not.include(
        resources.testingInputValue
      );
    });

    afterEach(hooksAfter.afterEach.reload);
  });
});
