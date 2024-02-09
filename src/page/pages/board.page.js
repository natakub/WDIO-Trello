const BasePage = require("./base.page");
const {
  BoardHeader,
  Lists,
  ListComposer,
  List,
  CardComposer,
  FilterPopover,
  CardsList,
  Card,
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
    this.cardList = new CardsList();
    this.card = new Card();
  }
}

module.exports = BoardPage;
