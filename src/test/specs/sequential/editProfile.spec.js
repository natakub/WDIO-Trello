const { browser } = require("@wdio/globals");
const { assert } = require("chai");
const { pages } = require("../../../page");

describe("Trello editind user profile", () => {
  before("loggin into the account and open user profile page", async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      process.env.EMAIL,
      process.env.PASSWORD
    );

    // Open user profile page
    await browser.newWindow("https://trello.com/u/testuser25489");
    await pages("account").loggedoutHeader.waitForExist(undefined, true);
    await pages("account").memberNavbar.profileTab.waitAndClick();
  });

  describe("Update username with valid characters", () => {
    it("should update username when edited using valid characters", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.input("username").waitAndAddValue("tester");
      await editForm.saveEditBtn.waitAndClick();
      await editForm.successPopup.waitForDisplayed();

      //using chai Assert
      const popupDisplayed = await editForm.successPopup.isDisplayed();
      const popupText = await editForm.successPopup.getText();
      const username = await pages("account").userInfo.username.getText();

      await assert.isTrue(popupDisplayed, "success popup did not display");
      await assert.equal(popupText, "Saved", "popup didn't have expected text");

      await editForm.closePopup();

      await assert.include(
        username,
        "tester",
        "username has not been updated with expected values"
      );
    });

    after("reset the changes", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.eraseInputValues(editForm.input("username"), 6);
      await editForm.saveEditBtn.waitAndClick();
      await editForm.closePopup();
    });
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

    after("reset the changes", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.eraseInputValues(editForm.input("username"), 2);
      await editForm.saveEditBtn.waitAndClick();
      await editForm.closePopup();
    });
  });

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
});
