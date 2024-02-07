// const { expect, browser } = require("@wdio/globals");
// const { pages } = require("../../po");

// describe("Trello card filtering", () => {
//   before("loggin into the account and open board page", async () => {
//     await pages("home").open();
//     await pages("home").homeHeader.loginPageBtn.waitAndClick();
//     await pages("login").loginForm.performLogin(
//       "test.user010101111@gmail.com",
//       "test.password"
//     );

//     //open board page
//     await browser.newWindow(
//       "https://trello.com/b/AAK0vnYV/test-card-filtering"
//     );
//   });

//   it("should filter cards by member", async () => {
//     await pages("board").boardHeader.filterBtn.waitAndClick();
//     await pages("board").filterPopover.checkbox("assignedToMe").click();
//     await pages("board").filterPopover.filterClose.waitAndClick();

//     const memberBadges = await pages("board").card.badge("member");
//      for (const memberBadge of memberBadges) {
//       await memberBadge.waitForDisplayed();
//      }

//     console.log(memberBadge);
//     const memberLength = memberBadges.length;

//     console.log(memberLength);
//     // const cardElements = await pages("board").cardList.cardElements;
//     // console.log(cardElements);

//     // const filteredCards = [];
//     // for (const card of cardElements) {
//     //   const memberBadge = pages("board").card.badge("member");
//     //   const match = await pages("board").card.matchesFilterCriteria(
//     //     card,
//     //     memberBadge
//     //   );

//     //   if (match) {
//     //     filteredCards.push(card);
//     //   }
//     // }

//     // console.log(filteredCards);

//     // Define the selectors for badges
//     // const memberBadge = pages("board").card.badge("member");
//     // const badgeSelectors = [memberBadge];

//     // // Filter the card elements array based on whether they have a child element with one of the badge selectors
//     // const cardsWithBadge = await cardElements.filter(async (cardElement) => {
//     //   // Check if the card element has a child element with one of the badge selectors
//     //   return badgeSelectors.some(
//     //     (badgeSelector) => cardElement.$(badgeSelector).length > 0
//     //   );
//     //   // return cardElement.$(await pages("board").card.badge("member"));
//     // });

//     // console.log(cardsWithBadge);
//   });
// });
