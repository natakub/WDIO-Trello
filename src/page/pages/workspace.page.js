const BasePage = require("./base.page");
const { WorkspaceInfo, EditWorkspaceForm } = require("../components");

class WorkspacePage extends BasePage {
  constructor() {
    super();

    this.workspaceInfo = new WorkspaceInfo();
    this.editWorkspaceForm = new EditWorkspaceForm();
  }
}

module.exports = WorkspacePage;
