const { browser } = require("@wdio/globals");
const { assert } = require("chai");
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

    const cardsNames = pages("board").list.cardsNames;
    const latestCard = await pages("board").list.getLastElement(cardsNames);
    const latestCardName = await latestCard.getText();
    //using chai Assert
    await assert.equal(
      latestCardName,
      "Card Name",
      "latest card name title is not the expected one"
    );
  });

  it("should cancel new card creation in list if requested", async () => {
    await pages("board").cardComposer.cardNameInput.waitAndSetValue(
      "Card Cancel"
    );
    await pages("board").cardComposer.cancelCardBtn.waitAndClick();

    const allCardsNames = await pages("board").list.cardsNames;
    const cardNamesArray = await allCardsNames.map(async (cardName) => {
      return await cardName.getText();
    });

    //using chai Assert
    await assert.notInclude(
      cardNamesArray,
      "Card Cancel",
      "array contains this card name"
    );
  });
});
