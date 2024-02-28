const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class ListComponent extends BaseComponent {
  constructor() {
    super("[data-testid='list']");
  }

  get cardComposerBtn() {
    return new Button("[data-testid='list-add-card-button']");
  }

  get cardsNames() {
    return this.rootEl.$$("[data-testid='card-name']");
  }
}

module.exports = ListComponent;
