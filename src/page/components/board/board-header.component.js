const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class BoardHeaderComponent extends BaseComponent {
  constructor() {
    super(".board-header");
  }

  get boardName() {
    return this.rootEl.$("[data-testid='board-name-display']");
  }

  get filterBtn() {
    return new Button("[data-testid='filter-popover-button']");
  }

  get filterClearBtn() {
    return new Button("[data-testid='filter-popover-button-x']");
  }
}

module.exports = BoardHeaderComponent;
