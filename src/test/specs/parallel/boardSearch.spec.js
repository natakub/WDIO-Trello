const { browser } = require("@wdio/globals");
const should = require("chai").should();
const { pages } = require("../../../page");

describe("Trello Board Search", () => {
  before("loggin into the account and open board search page", async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      process.env.EMAIL,
      process.env.PASSWORD
    );

    //open search page
    await browser.newWindow("https://trello.com/search");
  });

  it("should find a board with the specified name and be able to access it", async () => {
    const search = await pages("search").searchComponent;
    await search.searchInput.waitAndSetValue("Board Test Search");
    await search.boards.waitForDisplayed();

    const firstSearchResultItem = await search.searchResultItem[0];
    const boardTitle = await firstSearchResultItem.getAttribute("title");
    //using chai Should
    await boardTitle.should.equal("Board Test Search");

    await firstSearchResultItem.click();

    const boardName = await pages("board").boardHeader.boardName.getText();
    //using chai Should
    boardName.should.equal("Board Test Search");
  });

  it("should find all board with similar names and be able to access it", async () => {
    const search = await pages("search").searchComponent;
    await search.searchInput.waitAndSetValue("for test");
    await search.boards.waitForDisplayed();

    const searchResultList = await search.searchResultItem;
    const resultTitles = await searchResultList.map(async (resultItem) => {
      return await resultItem.getAttribute("title");
    });
    //using chai Should (every title matches the regular expression)
    await resultTitles.every((title) => /for test/i.test(title)).should.be.true;
    await resultTitles.forEach((title) => title.should.match(/for test/i));

    const secondSearchResultItem = await search.searchResultItem[1];
    await secondSearchResultItem.click();

    const boardName = await pages("board").boardHeader.boardName.getText();
    //using chai Should
    boardName.should.match(/for test/i);
  });

  afterEach("comeback to search page", async () => {
    await browser.newWindow("https://trello.com/search");
  });
});
