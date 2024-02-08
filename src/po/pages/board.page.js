const BasePage = require("./base.page");
const {
  BoardHeader,
  Lists,
  ListComposer,
  List,
  CardComposer,
  FilterPopover,
} = require("../components");

class BoardPage extends BasePage {
  constructor() {
    super();
    this.boardHeader = new BoardHeader();
    this.lists = new Lists();
    this.listComposer = new ListComposer();
    this.list = new List();
    this.cardComposer = new CardComposer();
    this.filterPopover = new FilterPopover();
  }
}

module.exports = BoardPage;
