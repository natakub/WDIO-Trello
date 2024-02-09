const { expect } = require("@wdio/globals");
const { pages } = require("../../../page");

describe("Trello Sign up", () => {
  before(async () => {
    await pages("home").open();
    await pages("home").homeHeader.signupPageBtn.waitAndClick();
  });

  it("an error message should appear when trying to sign up with invalid credential", async () => {
    const signupForm = pages("signup").signupForm;

    await signupForm.performSignup("test.user010101111@gmailcom");
    await signupForm.signupBtn.waitAndClick();
    await signupForm.signupBtn.waitAndClick();

    await expect(signupForm.errorMessage).toBeDisplayed();
  });
});
