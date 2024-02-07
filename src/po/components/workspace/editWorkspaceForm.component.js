const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class EditWorkspaceFormComponent extends BaseComponent {
  get saveEditBtn() {
    return new Button("form button[type='submit']");
  }

  get cancelEditBtn() {
    return new Button("form button[type='button']");
  }

  get successPopup() {
    return $("#FlagGroup .a4ZvSL0pjeULBU");
  }

  /**
   *
   * @param  name { "name" | "description" }
   * @returns {*}
   */

  input(name) {
    const selectors = {
      name: "#displayName",
      description: "#desc",
    };

    return $(selectors[name]);
  }
}

module.exports = EditWorkspaceFormComponent;
