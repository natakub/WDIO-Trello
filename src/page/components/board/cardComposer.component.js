const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");
const Input = require("../../../controls/input");

class CardComposerComponent extends BaseComponent {
  get cardNameInput() {
    return new Input("[data-testid='list-card-composer-textarea']");
  }

  get addCardBtn() {
    return new Button("[data-testid='list-card-composer-add-card-button']");
  }

  get cancelCardBtn() {
    return new Button("[data-testid='list-card-composer-cancel-button']");
  }
}

module.exports = CardComposerComponent;
