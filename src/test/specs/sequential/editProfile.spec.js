const { browser, expect } = require("@wdio/globals");
const { assert } = require("chai");
const { pages } = require("../../../page");
const { hooksBefore, hooksAfter } = require("../../../support/hooks/index");

describe("Trello editind user profile", () => {
  beforeEach(hooksBefore.beforeEachEditProfile);

  describe("Update username with valid characters", () => {
    it("should update username when edited using valid characters", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.input("username").waitAndAddValue("tester");
      await editForm.saveEditBtn.waitAndClick();
      await editForm.successPopup.waitForDisplayed();

      //using chai Assert
      const popupDisplayed = await editForm.successPopup.isDisplayed();
      // const popupText = await editForm.successPopup.getText();
      const username = await pages("account").userInfo.username.getText();

      await assert.isTrue(popupDisplayed, "success popup did not display");
      // await assert.equal(popupText, "Saved", "popup didn't have expected text");
      await expect(editForm.successPopup).toHaveText("Saved");

      await editForm.closePopup();

      await assert.include(
        username,
        "tester",
        "username has not been updated with expected values"
      );
    });

    afterEach(hooksAfter.afterEachResetChangesValid);
  });

  describe("update username with invalid characters", () => {
    it("should throw an error when username edited with invalid characters", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.input("username").waitAndAddValue("*^");
      await editForm.saveEditBtn.waitAndClick();
      await editForm.errorMessage.waitForDisplayed();

      const errorMessageDisplayed = await editForm.errorMessage.isDisplayed();
      const errorText = await editForm.errorMessage.getText();
      //using chai Assert
      await assert.isTrue(
        errorMessageDisplayed,
        "error message did not display"
      );
      await assert.include(
        errorText,
        "Username is invalid",
        "error message didn't include expected text"
      );
    });

    afterEach(hooksAfter.afterEachResetChangesInvalid);
  });

  describe("cancel username editing", async () => {
    it("username should remain unchanged when cancel edited changes", async () => {
      const userProfileNameElement = pages("account").userInfo.username;
      await userProfileNameElement.waitForDisplayed();
      const initialUserName = await userProfileNameElement.getText();

      const editForm = await pages("account").editUserForm;
      await editForm.input("username").waitAndAddValue("tester");
      await browser.refresh();

      await userProfileNameElement.waitForDisplayed();
      const finalUserName = await userProfileNameElement.getText();

      //using chai Assert
      await assert.equal(initialUserName, finalUserName, "username changed");
      await assert.notInclude(
        finalUserName,
        "tester",
        "username updated even after cancelation"
      );
    });

    afterEach(hooksAfter.afterEachReload);
  });
});
