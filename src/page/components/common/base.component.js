class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return $(this.rootSelector);
  }

  async getTextToLowerCase(element) {
    await element.waitForDisplayed();
    const text = await element.getText();

    return text.toLowerCase();
  }

  async eraseInputValues(input, numberOfValues) {
    const backspace = "\uE003";

    for (let i = 0; i < numberOfValues; i++) {
      await input.waitAndAddValue(backspace);
    }
  }

  async getLastElement(list) {
    const elements = await list;
    const lastIndex = elements.length - 1;
    return elements[lastIndex];
  }

  async waitAndGetText(element) {
    await element.waitForDisplayed();

    return element.getText();
  }
}

module.exports = BaseComponent;
