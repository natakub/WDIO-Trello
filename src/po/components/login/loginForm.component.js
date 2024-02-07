const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class LoginFormComponent extends BaseComponent {
  get errorLoginMessage() {
    return $("[data-testid='form-error']");
  }

  get emailSentMessage() {
    return $("#email-sent-page");
  }

  /**
   *
   * @param  name {"login" | "resetPasswordRequest" | "resetPasswordConfirm"}
   * @returns {*}
   */

  get button() {
    const selectors = {
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

  input(name) {
    const selectors = {
      email: "#username",
      password: "#password",
      emailForPasswordReset: "#email",
    };

    return $(selectors[name]);
  }

  performLogin = async (email, password) => {
    await this.input("email").setValue(email);
    await this.button("login").waitAndClick();
    await this.input("password").waitForDisplayed({ timeout: 5000 });
    await this.input("password").setValue(password);
    await this.button("login").waitAndClick();
  };
}

module.exports = LoginFormComponent;
