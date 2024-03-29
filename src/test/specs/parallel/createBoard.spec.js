const { expect } = require("chai");
const { pages } = require("../../../page");

describe("Creating new Board", () => {
  before("loggin into the account", async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      process.env.EMAIL,
      process.env.PASSWORD
    );
  });

  it("should add new board with specified name", async () => {
    await pages("boards").header.createMenuBtn.waitAndClick();
    await pages("boards").header.createBoardBtn.waitAndClick();
    await pages("boards").createBoard.boardTitleInput.waitAndSetValue(
      "Board Name"
    );
    await pages("boards").createBoard.submitBoardBtn.waitAndClick();

    const boardName = await pages("board").boardHeader.boardName.getText();
    //using chai Expect
    await expect(boardName).to.equal("Board Name");
  });
});
