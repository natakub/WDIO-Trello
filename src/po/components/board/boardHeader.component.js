const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class BoardHeaderComponent extends BaseComponent {
  get boardName() {
    return $("[data-testid='board-name-display']");
  }
}

module.exports = BoardHeaderComponent;
