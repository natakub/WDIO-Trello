const { assert } = require("chai");
const { pages } = require("../../../page");
const { hooksBeforeEach } = require("../../../support/hooks");
const resources = require("../../../support/resources");

describe("Trello Sign up", () => {
  beforeEach(hooksBeforeEach.openSignupPage);

  it("an error message should appear when trying to sign up with invalid credential", async () => {
    const signupForm = pages("signup").signupForm;

    await signupForm.performSignup(resources.invalidSignupEmail);
    await signupForm.signupBtn.waitAndClick();
    await signupForm.signupBtn.waitAndClick();
    await signupForm.errorMessage.waitForDisplayed();

    const messageDisplayed = await signupForm.errorMessage.isDisplayed();
    //using chai Assert
    await assert.isTrue(messageDisplayed, "error message did not display");
  });
});
