const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class MemberMenuComponent extends BaseComponent {
  get logoutBtn() {
    return new Button("[data-testid='account-menu-logout']");
  }

  get profileBtn() {
    return new Button("data-testid='account-menu-profile'");
  }
}

module.exports = MemberMenuComponent;
