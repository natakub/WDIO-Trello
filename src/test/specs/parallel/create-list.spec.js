const { browser } = require("@wdio/globals");
const should = require("chai").should();
const { pages } = require("../../../page");
const { hooksBeforeEach, hooksAfter } = require("../../../support/hooks");
const resources = require("../../../support/resources");

describe("Trello List Creation", () => {
  beforeEach(hooksBeforeEach.loginAndOpenBoardPage);

  it("should create new list in board", async () => {
    await pages("board").lists.listComposerBtn.waitAndClick();
    await pages("board").listComposer.listNameInput.waitAndSetValue(
      resources.createdListName
    );
    await pages("board").listComposer.addListBtn.waitAndClick();

    const listNames = pages("board").lists.listNames;
    const latestList = await pages("board").lists.getLastElement(listNames);
    const latestListName = await latestList.getText();
    //using chai Should
    await latestListName.should.equal(
      resources.createdListName,
      "latest list name title is not the expected one"
    );
  });

  it("should cancel new list creation in board if requested", async () => {
    await pages("board").lists.listComposerBtn.waitAndClick();
    await pages("board").listComposer.listNameInput.waitAndSetValue(
      resources.canceledListName
    );
    await pages("board").listComposer.cancelListBtn.waitAndClick();

    const allListNames = await pages("board").lists.listNames;
    const listNamesArray = await allListNames.map(async (listName) => {
      return await listName.getText();
    });
    //using chai Should
    await listNamesArray.should.not.include(
      resources.canceledListName,
      "array contains this list name"
    );
  });

  afterEach(hooksAfter.afterEach.reload);
});
