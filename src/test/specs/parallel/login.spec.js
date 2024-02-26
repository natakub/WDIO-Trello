const { expect } = require("@wdio/globals");
const { pages } = require("../../../page");

describe("Trello Login", () => {
  beforeEach(async () => {
    await pages("login").open();
  });

  it("an appropriate error message should appear when trying to log in with invalid credentials", async () => {
    const loginForm = pages("login").loginForm;
    await loginForm.performLogin("test.user010101111@gmail.co", "test.passwor");

    const errorMessage = await loginForm.errorLoginMessage.getText();

    await expect(errorMessage).toMatch(
      /incorrect email address and \/ or password|incorrecto correo|неправильный адрес электронной почты|неправильна адреса електронної пошти та \(або\) пароль/i
    );
  });

  it("a corresponding message should appear when requesting a password reset", async () => {
    const loginForm = pages("login").loginForm;

    await loginForm
      .input("email")
      .waitAndSetValue("test.user010101111@gmail.com");
    await loginForm.button("continue").waitAndClick();
    await loginForm.button("resetPasswordRequest").waitAndClick();
    await loginForm.button("resetPasswordConfirm").waitAndClick();

    await expect(loginForm.emailSentMessage).toBeDisplayed();

    const emailSentMessage = await loginForm.emailSentMessage.getText();
    await expect(emailSentMessage).toMatch(
      /we sent a recovery link to you|ми надіслали посилання для відновлення|мы отправили ссылку для восстановления/i
    );
  });

  it("should log in with valid credentials", async () => {
    const loginForm = pages("login").loginForm;
    const userWorkspaces = pages("boards").userWorkspaces;

    await loginForm.performLogin(
      "test.user010101111@gmail.com",
      "test.password"
    );

    const userWorkspacesTitle = await userWorkspaces.getTextToLowerCase(
      userWorkspaces.userWorkspacesTitle
    );

    await expect(userWorkspacesTitle).toMatch(
      /your workspaces|ваші робочі області|ваши рабочие области/i
    );
  });
});
