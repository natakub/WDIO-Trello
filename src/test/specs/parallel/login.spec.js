const { expect } = require("chai");
const { pages } = require("../../../page");
const resources = require("../../../support/resources");

describe("Trello Login", () => {
  beforeEach(async () => {
    await pages("login").open();
  });

  it("an appropriate error message should appear when trying to log in with incorrect credentials", async () => {
    const loginForm = pages("login").loginForm;
    await loginForm.performLogin(
      resources.incorrectLoginEmail,
      resources.incorrectLoginPasssword
    );

    const errorMessage = await loginForm.errorLoginMessage.getText();
    //using chai Expect
    await expect(errorMessage).to.match(resources.errorLoginMessageRegExp);
  });

  it("a corresponding message should appear when requesting a password reset", async () => {
    const loginForm = pages("login").loginForm;

    await loginForm.input("email").waitAndSetValue(process.env.EMAIL);
    await loginForm.button("continue").waitAndClick();
    await loginForm.button("resetPasswordRequest").waitAndClick();
    await loginForm.button("resetPasswordConfirm").waitAndClick();
    await loginForm.emailSentMessage.waitForDisplayed();

    const messageDisplayed = await loginForm.emailSentMessage.isDisplayed();
    const emailSentMessage = await loginForm.emailSentMessage.getText();
    //using chai Expect
    await expect(messageDisplayed, "message did not display").to.be.true;
    await expect(emailSentMessage).to.match(
      resources.resetPasswordConfirmationMessageRegExp
    );
  });

  it("should log in with valid credentials", async () => {
    const loginForm = pages("login").loginForm;
    const allBoards = pages("boards").allBoards;

    await loginForm.performLogin(process.env.EMAIL, process.env.PASSWORD);

    const userWorkspacesTitle = await allBoards.getTextToLowerCase(
      allBoards.userWorkspacesTitle
    );
    //using chai Expect
    await expect(userWorkspacesTitle).to.match(
      resources.userWorkspacesTitleRegExp
    );
  });
});
