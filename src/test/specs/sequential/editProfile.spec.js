const { expect, browser } = require("@wdio/globals");
const { pages } = require("../../../po");

describe("Trello editind user profile", () => {
  before("loggin into the account and open user profile page", async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
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

      await expect(editForm.successPopup).toBeDisplayed;
      await expect(editForm.successPopup).toHaveText("Saved");
      await editForm.closePopup();

      await expect(pages("account").userInfo.username).toHaveTextContaining(
        "tester"
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

      await expect(editForm.errorMessage).toBeDisplayed();
      await expect(editForm.errorMessage).toHaveTextContaining(
        "Username is invalid"
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

    expect(initialUserName).toBe(finalUserName);
    await expect(pages("account").userInfo.username).not.toHaveTextContaining(
      "tester"
    );
  });
});
