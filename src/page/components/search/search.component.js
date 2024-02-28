const BaseComponent = require("../common/base.component");
const Input = require("../../controls/input");

class SearchComponent extends BaseComponent {
  constructor() {
    super(".U8nNpLQtodnSyN");
  }

  get searchInput() {
    return new Input("[data-testid='advanced-search-input']");
  }

  get boards() {
    return this.rootEl.$("h3.=boards");
  }

  get searchResultItem() {
    return this.rootEl.$$("[data-testid='advanced-search-board-result-item']");
  }
}

module.exports = SearchComponent;
