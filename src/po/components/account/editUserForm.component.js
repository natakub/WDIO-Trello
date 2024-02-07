const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");
const Input = require("../../../controls/input");

class EditUserFormComponent extends BaseComponent {
  get saveEditBtn() {
    return new Button("button[type='submit']");
  }

  get successPopup() {
    return $("#FlagGroup .QMKgZFIlTLiEJN");
  }

  get errorMessage() {
    return $("#SaveProfileError_Field_username");
  }

  /**
   *
   * @param  name { "username" | "bio" }
   * @returns {*}
   */

  input(name) {
    const selectors = {
      username: "#username",
      bio: "#bio",
    };

    return new Input(selectors[name].toLowerCase());
  }
}

module.exports = EditUserFormComponent;
