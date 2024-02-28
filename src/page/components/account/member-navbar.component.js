const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class MemberNavbarComponent extends BaseComponent {
  constructor() {
    super(".tabbed-pane-nav-member-detail-redesign");
  }

  get profileTab() {
    return new Button("[data-tab='profile']");
  }
}

module.exports = MemberNavbarComponent;
