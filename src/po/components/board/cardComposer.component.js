const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class CardComposerComponent extends BaseComponent {
  get cardNameInput() {
    return $("[data-testid='list-card-composer-textarea']");
  }

  get addCardBtn() {
    return new Button("[data-testid='list-card-composer-add-card-button']");
  }

  get cancelCardBtn() {
    return new Button("[data-testid='list-card-composer-cancel-button']");
  }
}

module.exports = CardComposerComponent;
