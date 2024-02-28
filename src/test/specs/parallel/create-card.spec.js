const { browser } = require("@wdio/globals");
const { assert } = require("chai");
const { pages } = require("../../../page");
const { hooksBeforeEach, hooksAfter } = require("../../../support/hooks");
const resources = require("../../../support/resources");

describe("Trello Card Creation", () => {
  beforeEach(hooksBeforeEach.loginAndOpenBoardPage);

  it("should create a new card in list", async () => {
    await pages("board").list.cardComposerBtn.waitAndClick();
    await pages("board").cardComposer.cardNameInput.waitAndSetValue(
      resources.createdCardName
    );
    await pages("board").cardComposer.addCardBtn.waitAndClick();

    const cardsNames = pages("board").list.cardsNames;
    const latestCard = await pages("board").list.getLastElement(cardsNames);
    const latestCardName = await latestCard.getText();
    //using chai Assert
    await assert.equal(
      latestCardName,
      resources.createdCardName,
      "latest card name title is not the expected one"
    );
  });

  it("should cancel new card creation in list if requested", async () => {
    await pages("board").list.cardComposerBtn.waitAndClick();
    await pages("board").cardComposer.cardNameInput.waitAndSetValue(
      resources.canceledCardName
    );
    await pages("board").cardComposer.cancelCardBtn.waitAndClick();

    const allCardsNames = await pages("board").list.cardsNames;
    const cardNamesArray = await allCardsNames.map(async (cardName) => {
      return await cardName.getText();
    });

    //using chai Assert
    await assert.notInclude(
      cardNamesArray,
      resources.canceledCardName,
      "array contains this card name"
    );
  });

  afterEach(hooksAfter.afterEach.reload);
});
