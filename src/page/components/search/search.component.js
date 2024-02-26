const BaseComponent = require("../common/base.component");
const Input = require("../../controls/input");

class SearchComponent extends BaseComponent {
  get searchInput() {
    return new Input("[data-testid='advanced-search-input']");
  }

  get boards() {
    return $("//h3[text()='Boards']");
  }

  get searchResultItem() {
    return $$("[data-testid='advanced-search-board-result-item']");
  }
}

module.exports = SearchComponent;
