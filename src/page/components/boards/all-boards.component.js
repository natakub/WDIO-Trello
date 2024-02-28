const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
// const Button = require("../../../controls/button");

class AllBoardsComponent extends BaseComponent {
  constructor() {
    super(".all-boards");
  }

  get userWorkspacesTitle() {
    return this.rootEl.$("h3.boards-page-section-header-name");
  }
}

module.exports = AllBoardsComponent;
