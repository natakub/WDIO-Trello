const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class CardComponent extends BaseComponent {
  get cardMemberBtn() {
    return new Button("[data-testid='card-front-member']");
  }

  get cardElements() {
    return $$("[data-testid='trello-card']");
  }

  /**
   *
   * @param  name {"overdue" | "greenLabel" | "purpleLabel" | "pinkLabel"}
   * @returns {*}
   */

  get badge() {
    const selectors = {
      member: "[data-testid='card-front-member']",
      overdue: "[data-testid='badge-due-date-not-completed']",
      greenLabel: "[data-testid='compact-card-label'][data-color='green']",
      purpleLabel: "[data-testid='compact-card-label'][data-color='purple']",
      pinkLabel: "[data-testid='compact-card-label'][data-color='pink_dark']",
    };

    return (name) => $$(selectors[name]);
  }

  async matchesFilterCriteria(card, filterCriteria) {
    const badge = await card.$(filterCriteria);

    return !!badge;
  }
}

module.exports = CardComponent;
