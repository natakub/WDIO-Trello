const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class ListsComponent extends BaseComponent {
  get listComposerBtn() {
    return new Button("[data-testid='list-composer-button']");
  }

  get listNames() {
    return $$("[data-testid='list-name']");
  }
}

module.exports = ListsComponent;
