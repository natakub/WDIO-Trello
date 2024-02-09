const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");

class CardsListComponent extends BaseComponent {
  get cardElements() {
    return $$("[data-testid='trello-card']");
  }
}

module.exports = CardsListComponent;
