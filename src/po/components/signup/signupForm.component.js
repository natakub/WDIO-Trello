const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class SignupFormComponent extends BaseComponent {
  get signupBtn() {
    return new Button("#signup-submit");
  }

  get errorMessage() {
    return $("#email-uid2-error");
  }

  get captchaMessage() {
    return $("section[data-testid='form-error']");
  }

  /**
   *
   * @param  name {"email" | "password"}
   * @returns {*}
   */

  input(name) {
    const selectors = {
      email: "#email",
      password: "#password",
    };

    return $(selectors[name.toLowerCase()]);
  }

  performSignup = async (email) => {
    await this.input("email").setValue(email);
    await this.signupBtn.waitAndClick();
  };
}

module.exports = SignupFormComponent;
