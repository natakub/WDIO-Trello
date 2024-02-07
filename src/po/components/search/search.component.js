const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class SearchComponent extends BaseComponent {
  get searchInput() {
    return $("[data-testid='advanced-search-input']");
  }

  get searchResultItem() {
    return $$("[data-testid='advanced-search-board-result-item']");
  }
}

module.exports = SearchComponent;
