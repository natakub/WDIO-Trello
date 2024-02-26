const BaseComponent = require("../common/base.component");
const Button = require("../../controls/button");

class WorkspaceInfoComponent extends BaseComponent {
  get workspaceName() {
    return $("h2.SiP6d2d_8FAAkC");
  }

  get workspaceDescription() {
    return $(".W44URgoh0fSdK1.MneRKcZGdfz2QD p");
  }

  get openEditWorkspaceFormBtn() {
    return new Button("button.Ch1Opdvr77xkJp");
  }
}

module.exports = WorkspaceInfoComponent;
