const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class ListComposerComponent extends BaseComponent {
  get listNameInput() {
    return $("[name='Enter list title…']");
  }

  get addListBtn() {
    return new Button("[data-testid='list-composer-add-list-button']");
  }

  get cancelListBtn() {
    return new Button("[data-testid='list-composer-cancel-button']");
  }
}

module.exports = ListComposerComponent;
