const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");
const Input = require("../../controls/input");

class EditWorkspaceFormComponent extends BaseComponent {
  constructor() {
    super("form[aria-label='OrganizationDetailForm']");
  }

  get saveEditBtn() {
    return new Button("button.=save");
  }

  get cancelEditBtn() {
    return new Button("button.=cancel");
  }

  /**
   *
   * @param  name { "name" | "description" }
   * @returns {*}
   */

  get input() {
    const selectors = {
      name: "#displayName",
      description: "#desc",
    };

    return (name) => new Input(selectors[name]);
  }
}

module.exports = EditWorkspaceFormComponent;
