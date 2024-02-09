const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class ListComponent extends BaseComponent {
  get cardComposerBtn() {
    return new Button("[data-testid='list-add-card-button']");
  }

  get cardNames() {
    return $$("[data-testid='card-name']");
  }
}

module.exports = ListComponent;
