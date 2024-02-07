const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class LogoutFormComponent extends BaseComponent {
  get logoutConfirmBtn() {
    return new Button("#logout-submit");
  }
}

module.exports = LogoutFormComponent;
