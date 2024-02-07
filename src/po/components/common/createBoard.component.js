const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class CreateBoardComponent extends BaseComponent {
  get boardTitleInput() {
    return $("[data-testid='create-board-title-input']");
  }

  get submitBoardBtn() {
    return new Button("[data-testid='create-board-submit-button']");
  }
}

module.exports = CreateBoardComponent;
