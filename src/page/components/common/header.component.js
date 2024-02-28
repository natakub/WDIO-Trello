const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class HeaderComponent extends BaseComponent {
  constructor() {
    super("[data-testid='authenticated-header']");
  }

  get createMenuBtn() {
    return new Button("[data-testid='header-create-menu-button']");
  }

  get memberIcon() {
    return this.rootEl.$("[data-testid='header-member-menu-avatar']");
  }
}

module.exports = HeaderComponent;
