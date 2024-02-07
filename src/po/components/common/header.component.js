const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class HeaderComponent extends BaseComponent {
  // get memberMenuBtn() {
  //   return new Button("[data-testid='header-member-menu-button']");
  // }

  get createMenuBtn() {
    return new Button("[data-testid='header-create-menu-button']");
  }

  get createBoardBtn() {
    return new Button("[data-testid='header-create-board-button']");
  }
}

module.exports = HeaderComponent;
