const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
// const Button = require("../../../controls/button");

class UserWorkspacesComponent extends BaseComponent {
  get userWorkspacesTitle() {
    return $("h3.boards-page-section-header-name");
  }
}

module.exports = UserWorkspacesComponent;
