const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");
const Input = require("../../controls/input");

class CreateBoardComponent extends BaseComponent {
  get boardTitleInput() {
    return new Input("[data-testid='create-board-title-input']");
  }

  get submitBoardBtn() {
    return new Button("[data-testid='create-board-submit-button']");
  }
}

module.exports = CreateBoardComponent;
