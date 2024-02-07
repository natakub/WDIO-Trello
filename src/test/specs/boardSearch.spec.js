const { expect, browser } = require("@wdio/globals");
const { pages } = require("../../po");

describe("Trello Board Search", () => {
  before("loggin into the account and open board search page", async () => {
    await pages("home").open();
    await pages("home").homeHeader.loginPageBtn.waitAndClick();
    await pages("login").loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
    );

    //open search page
    await browser.newWindow("https://trello.com/search");
  });

  it("should find a board with the specified name and be able to access it", async () => {
    const search = await pages("search").searchComponent;
    await search.searchInput.setValue("Board Test Search");

    await expect(search.searchResultItem).toHaveAttribute(
      "title",
      "Board Test Search"
    );

    const firstSearchResultItem = await search.searchResultItem[0];
    await firstSearchResultItem.click();

    await expect(pages("board").boardHeader.boardName).toHaveText(
      "Board Test Search"
    );
  });

  it("should find all board with similar names and be able to access it", async () => {
    const search = await pages("search").searchComponent;
    await search.searchInput.setValue("for test");

    await expect(search.searchResultItem).toHaveAttributeContaining(
      "title",
      /for test/i
    );

    const secondSearchResultItem = await search.searchResultItem[1];
    await secondSearchResultItem.click();

    await expect(pages("board").boardHeader.boardName).toHaveTextContaining(
      /for test/i
    );
  });

  afterEach("comeback to search page", async () => {
    await browser.waitUntil(
      async () => {
        await browser.back();
        const currentUrl = await browser.getUrl();
        return currentUrl.includes("https://trello.com/search");
      },
      {
        timeout: 5000,
        timeoutMsg: "Navigation back to search page timed out",
      }
    );
  });
});
