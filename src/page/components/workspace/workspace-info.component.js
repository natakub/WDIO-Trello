const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class WorkspaceInfoComponent extends BaseComponent {
  constructor() {
    super(".js-current-details");
  }

  get workspaceName() {
    return this.rootEl.$("h2.SiP6d2d_8FAAkC");
  }

  get workspaceDescription() {
    return this.rootEl.$(".W44URgoh0fSdK1.MneRKcZGdfz2QD p");
  }

  get openEditWorkspaceFormBtn() {
    return new Button("button.Ch1Opdvr77xkJp");
  }
}

module.exports = WorkspaceInfoComponent;
