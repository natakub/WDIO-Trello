const { expect, browser } = require("@wdio/globals");
const { pages } = require("../../po");

describe("Trello editind user profile", () => {
  before("loggin into the account and open user profile page", async () => {
    await pages("home").open();

    await pages("home").homeHeader.loginPageBtn.waitAndClick();
    await pages("login").loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
    );

    // Open user profile page
    await browser.newWindow("https://trello.com/u/testuser25489");
    await pages("account").memberNavbar.profileTab.waitAndClick();
  });

  describe("Update username with valid characters", () => {
    it("should update username when edited using valid characters", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.input("username").addValue("tester");
      await editForm.saveEditBtn.waitAndClick();

      await expect(editForm.successPopup).toBeDisplayed;
      await expect(editForm.successPopup).toHaveText("Saved");
      await expect(pages("account").userInfo.username).toHaveTextContaining(
        "tester"
      );
    });

    after("reset the changes", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.eraseInputValues(editForm.input("username"), 6);
      await editForm.saveEditBtn.waitAndClick();
      await browser.pause(5000);
    });
  });

  describe("update username with invalid characters", () => {
    it("should throw an error when username edited with invalid characters", async () => {
      const editForm = await pages("account").editUserForm;
      await editForm.input("username").addValue("*^");
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
    });
  });

  it("username should remain unchanged when cancel edited changes", async () => {
    const editForm = await pages("account").editUserForm;
    await editForm.input("username").addValue("tester");
    await browser.refresh();

    await expect(pages("account").userInfo.username).not.toHaveTextContaining(
      "tester"
    );
  });
});
