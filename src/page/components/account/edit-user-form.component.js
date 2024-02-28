const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");
const Input = require("../../controls/input");

class EditUserFormComponent extends BaseComponent {
  constructor() {
    super("[data-testid='profile-form']");
  }

  get saveEditBtn() {
    return new Button("button[type='submit']");
  }

  get errorMessage() {
    return this.rootEl.$("#SaveProfileError_Field_username");
  }

  /**
   *
   * @param  name { "username" | "bio" }
   * @returns {*}
   */

  get input() {
    const selectors = {
      username: "#username",
      bio: "#bio",
    };

    return (name) => new Input(selectors[name].toLowerCase());
  }

  get successPopup() {
    return $("#FlagGroup .QMKgZFIlTLiEJN");
  }

  get closePopupBtn() {
    return new Button("button.LbO_k5JPG5miXd");
  }

  async closePopup() {
    await this.closePopupBtn.waitAndClick();
    await this.closePopupBtn.waitForDisappear();
  }
}

module.exports = EditUserFormComponent;
