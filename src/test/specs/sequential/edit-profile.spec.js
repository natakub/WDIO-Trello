const { browser } = require("@wdio/globals");
const { assert } = require("chai");
const { pages } = require("../../../page");
const { hooksBeforeEach, hooksAfter } = require("../../../support/hooks");
const resources = require("../../../support/resources");

describe("Trello editind user profile", () => {
  beforeEach(hooksBeforeEach.loginAndOpenProfilePage);

  describe("Update username with valid characters", () => {
    it("should update username when edited using valid characters", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm
        .input("username")
        .waitAndAddValue(resources.testingInputValue);
      await editForm.saveEditBtn.waitAndClick();

      //using chai Assert
      const popupText = await editForm.waitAndGetText(editForm.successPopup);
      const popupDisplayed = await editForm.successPopup.isDisplayed();
      const username = await pages("account").userInfo.username.getText();

      await assert.isTrue(popupDisplayed, "success popup did not display");
      await assert.equal(
        popupText,
        resources.successPopup,
        "popup didn't have expected text"
      );

      await editForm.closePopup();

      await assert.include(
        username,
        resources.testingInputValue,
        "username has not been updated with expected values"
      );
    });

    after(hooksAfter.after.resetProfileChangesValid);
  });

  describe("update username with invalid characters", () => {
    it("should throw an error when username edited with invalid characters", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm
        .input("username")
        .waitAndAddValue(resources.invalidInputValue);
      await editForm.saveEditBtn.waitAndClick();

      const errorText = await editForm.waitAndGetText(editForm.errorMessage);
      const errorMessageDisplayed = await editForm.errorMessage.isDisplayed();

      //using chai Assert
      await assert.isTrue(
        errorMessageDisplayed,
        "error message did not display"
      );
      await assert.include(
        errorText,
        resources.invalidUsernameError,
        "error message didn't include expected text"
      );
    });

    after(hooksAfter.after.resetProfileChangesInvalid);
  });

  describe("cancel username editing", async () => {
    it("username should remain unchanged when cancel edited changes", async () => {
      const userInfo = await pages("account").userInfo;
      const initialUserName = await userInfo.waitAndGetText(userInfo.username);

      await pages("account")
        .editUserForm.input("username")
        .waitAndAddValue(resources.testingInputValue);
      await browser.refresh();

      const finalUserName = await userInfo.waitAndGetText(userInfo.username);

      //using chai Assert
      await assert.equal(initialUserName, finalUserName, "username changed");
      await assert.notInclude(
        finalUserName,
        resources.testingInputValue,
        "username updated even after cancelation"
      );
    });

    afterEach(hooksAfter.afterEach.reload);
  });
});
