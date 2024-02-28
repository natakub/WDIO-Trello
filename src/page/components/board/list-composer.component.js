const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");
const Input = require("../../controls/input");

class ListComposerComponent extends BaseComponent {
  constructor() {
    super("form.vVqwaYKVgTygrk");
  }

  get listNameInput() {
    return new Input("[name='Enter list title…']");
  }

  get addListBtn() {
    return new Button("[data-testid='list-composer-add-list-button']");
  }

  get cancelListBtn() {
    return new Button("[data-testid='list-composer-cancel-button']");
  }
}

module.exports = ListComposerComponent;
