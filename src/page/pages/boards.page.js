const BasePage = require("./base.page");
const { AllBoards } = require("../components");

class BoardsPage extends BasePage {
  constructor() {
    super();
    this.allBoards = new AllBoards();
  }
}

module.exports = BoardsPage;
