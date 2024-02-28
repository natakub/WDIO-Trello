const BaseComponent = require("../common/base.component");

class UserInfoComponent extends BaseComponent {
  constructor() {
    super(".tabbed-pane-header-member-detail-redesign");
  }

  get username() {
    return this.rootEl.$(".M7DuYRS8ksp5f8");
  }
}

module.exports = UserInfoComponent;
