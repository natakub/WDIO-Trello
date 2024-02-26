const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class MemberNavbarComponent extends BaseComponent {
  get profileTab() {
    return new Button("[data-tab='profile']");
  }
}

module.exports = MemberNavbarComponent;
