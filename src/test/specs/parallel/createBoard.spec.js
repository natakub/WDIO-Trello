const { expect } = require("chai");
const { pages } = require("../../../page");
const { hooksBeforeEach } = require("../../../support/hooks");

describe("Creating new Board", () => {
  beforeEach(hooksBeforeEach.login);

  it("should add new board with specified name", async () => {
    await pages("boards").header.createMenuBtn.waitAndClick();
    await pages("boards").CreateMenuPopover.createBoardBtn.waitAndClick();
    await pages("boards").CreateMenuPopover.boardTitleInput.waitAndSetValue(
      "Board Name"
    );
    await pages("boards").CreateMenuPopover.submitBoardBtn.waitAndClick();

    const boardName = await pages("board").boardHeader.boardName.getText();
    //using chai Expect
    await expect(boardName).to.equal("Board Name");
  });
});
