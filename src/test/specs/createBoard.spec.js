const { expect, browser } = require("@wdio/globals");
const { pages } = require("../../po");

describe("Creating new Board", () => {
  before("loggin into the account", async () => {
    await pages("home").open();
    await pages("home").homeHeader.loginPageBtn.waitAndClick();
    await pages("login").loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
    );
  });

  it("should add new board with specified name", async () => {
    await pages("boards").header.createMenuBtn.waitAndClick();
    await pages("boards").header.createBoardBtn.waitAndClick();
    await pages("boards").createBoard.boardTitleInput.setValue("Board Name");
    await pages("boards").createBoard.submitBoardBtn.waitAndClick();

    await expect(pages("board").boardHeader.boardName).toHaveText("Board Name");
  });
});
