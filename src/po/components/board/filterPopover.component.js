const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class FilterPopoverComponent extends BaseComponent {
  get filterClose() {
    return new Button("[data-testid='popover-close']");
  }

  /**
   *
   * @param  name {"assignedToMe" | "overdue" | "greenLabel" | "purpleLabel" | "pinkLabel"}
   * @returns {*}
   */

  checkbox(name) {
    const selectors = {
      assignedToMe:
        "div.atlaskit-portal-container div:nth-child(4) > ul > li:nth-child(2) > label",
      overdue:
        "div.atlaskit-portal-container  div:nth-child(5) > ul > li:nth-child(2) > label > input",
      greenLabel:
        "div.atlaskit-portal-container div:nth-child(6) > ul > li:nth-child(2) > label > input",
      purpleLabel:
        "div.atlaskit-portal-container div:nth-child(6) > ul > li:nth-child(3) > label > input",
      pinkLabel:
        "div.atlaskit-portal-container div:nth-child(6) > ul > li:nth-child(4) > label > input",
    };

    return $(selectors[name]);
  }
}

module.exports = FilterPopoverComponent;
