const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");
const Input = require("../../controls/input");

class LoginFormComponent extends BaseComponent {
  get errorLoginMessage() {
    return $("[data-testid='form-error']");
  }

  get emailSentMessage() {
    return $("#email-sent-page");
  }

  /**
   *
   * @param  name {"continue" | "login" | "resetPasswordRequest" | "resetPasswordConfirm"}
   * @returns {*}
   */

  get button() {
    const selectors = {
      continue: "#login",
      login: "#login-submit",
      resetPasswordRequest: "#resetPassword",
      resetPasswordConfirm: "#reset-password-email-submit",
    };

    return (name) => new Button(selectors[name]);
  }

  /**
   *
   * @param  name {"email" | "password" | "emailForPasswordReset"}
   * @returns {*}
   */

  get input() {
    const selectors = {
      email: "#user",
      password: "#password",
      emailForPasswordReset: "#email",
    };

    return (name) => new Input(selectors[name]);
  }

  async performLogin(email, password) {
    await this.input("email").waitAndSetValue(email);
    await this.button("continue").waitAndClick();
    await this.button("continue").waitForDisappear();
    await this.input("password").waitAndSetValue(password);
    await this.button("login").waitAndClick();
  }
}

module.exports = LoginFormComponent;
