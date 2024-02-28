const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");
const Input = require("../../controls/input");

class SignupFormComponent extends BaseComponent {
  get signupBtn() {
    return new Button("#signup-submit");
  }

  get errorMessage() {
    return $("#email-uid2-error");
  }

  /**
   *
   * @param  name {"email" | "password"}
   * @returns {*}
   */

  get input() {
    const selectors = {
      email: "#email",
      password: "#password",
    };

    return (name) => new Input(selectors[name.toLowerCase()]);
  }

  async performSignup(email) {
    await this.input("email").waitAndSetValue(email);
    await this.signupBtn.waitAndClick();
  }
}

module.exports = SignupFormComponent;
