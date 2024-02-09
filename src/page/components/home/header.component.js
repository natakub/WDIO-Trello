const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class HomeHeaderComponent extends BaseComponent {
  get signupPageBtn() {
    return new Button("[data-uuid='MJFtCCgVhXrVl7v9HA7EH_signup']");
  }

  get loginPageBtn() {
    return new Button("[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']");
  }
}

module.exports = HomeHeaderComponent;
