const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class ListsComponent extends BaseComponent {
  constructor() {
    super("[data-testid='lists']");
  }

  get listComposerBtn() {
    return new Button("[data-testid='list-composer-button']");
  }

  get listNames() {
    return this.rootEl.$$("[data-testid='list-name']");
  }
}

module.exports = ListsComponent;
