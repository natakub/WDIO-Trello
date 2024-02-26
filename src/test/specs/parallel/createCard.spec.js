const { expect, browser } = require("@wdio/globals");
const { pages } = require("../../../page");

describe("Trello Card Creation", () => {
  before("loggin into the account and open board page", async () => {
    await pages("login").open();
    await pages("login").loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
    );

    //open board page
    await browser.newWindow("https://trello.com/b/c26GhLBg/test-list-and-card");
  });

  it("should create a new card in list", async () => {
    await pages("board").list.cardComposerBtn.waitAndClick();
    await pages("board").cardComposer.cardNameInput.waitAndSetValue(
      "Card Name"
    );
    await pages("board").cardComposer.addCardBtn.waitAndClick();

    const cardNames = pages("board").list.cardNames;
    const latestCardName = await pages("board").list.getLastElement(cardNames);
    await expect(latestCardName).toHaveText("Card Name");
  });

  it("should cancel new card creation in list if requested", async () => {
    await pages("board").cardComposer.cardNameInput.waitAndSetValue(
      "Card Cancel"
    );
    await pages("board").cardComposer.cancelCardBtn.waitAndClick();

    const allCardNames = await pages("board").list.cardNames;
    await expect(allCardNames).not.toHaveTextContaining("Card Cancel");
  });
});
