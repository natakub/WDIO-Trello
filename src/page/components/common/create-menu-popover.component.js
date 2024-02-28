const BaseComponent = require("./base.component");
const Button = require("../../controls/button");
const Input = require("../../controls/input");

class CreateMenuPopoverComponent extends BaseComponent {
  constructor() {
    super("[data-testid='header-create-menu-popover']");
  }

  get createBoardBtn() {
    return new Button("[data-testid='header-create-board-button']");
  }

  get boardTitleInput() {
    return new Input("[data-testid='create-board-title-input']");
  }

  get submitBoardBtn() {
    return new Button("[data-testid='create-board-submit-button']");
  }
}

module.exports = CreateMenuPopoverComponent;
