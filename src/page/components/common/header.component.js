const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class HeaderComponent extends BaseComponent {
  get createMenuBtn() {
    return new Button("[data-testid='header-create-menu-button']");
  }

  get createBoardBtn() {
    return new Button("[data-testid='header-create-board-button']");
  }

  get memberIcon() {
    return $("[data-testid='header-member-menu-avatar']");
  }
}

module.exports = HeaderComponent;
