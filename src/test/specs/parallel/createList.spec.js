const { expect, browser } = require("@wdio/globals");
const { pages } = require("../../../po");

describe("Trello List Creation", () => {
  before("loggin into the account and open board page", async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
    );

    //open board page
    await browser.newWindow("https://trello.com/b/c26GhLBg/test-list-and-card");
  });

  it("should create new list in board", async () => {
    await pages("board").lists.listComposerBtn.waitAndClick();
    await pages("board").listComposer.listNameInput.waitAndSetValue(
      "List Name"
    );
    await pages("board").listComposer.addListBtn.waitAndClick();

    const listNames = pages("board").lists.listNames;
    const latestListName = await pages("board").lists.getLastElement(listNames);

    await expect(latestListName).toHaveText("List Name");
  });

  it("should cancel new list creation in board if requested", async () => {
    await pages("board").listComposer.listNameInput.waitAndSetValue(
      "List Cancel"
    );
    await pages("board").listComposer.cancelListBtn.waitAndClick();

    const allListNames = await pages("board").lists.listNames;
    await expect(allListNames).not.toHaveTextContaining("List Cancel");
  });
});
