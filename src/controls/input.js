class Button {
  constructor(selector) {
    this.selector = selector;
  }

  get element() {
    return $(this.selector);
  }

  async waitAndClick() {
    await this.element.waitForExist({
      timeout: 10000,
      timeoutMsg: "Button did not exist",
    });
    await this.element.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Button did not display",
    });
    await this.element.waitForEnabled({
      timeout: 10000,
      timeoutMsg: "Button is not enabled",
    });
    await this.element.click();
  }

  async waitAndSetValue(value) {
    await this.element.waitForExist({
      timeout: 10000,
      timeoutMsg: "Button did not exist",
    });
    await this.element.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Button did not display",
    });
    await this.element.waitForEnabled({
      timeout: 10000,
      timeoutMsg: "Button is not enabled",
    });
    await this.element.setValue(value);
  }

  async waitAndAddValue(value) {
    await this.element.waitForExist({
      timeout: 10000,
      timeoutMsg: "Button did not exist",
    });
    await this.element.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Button did not display",
    });
    await this.element.waitForEnabled({
      timeout: 10000,
      timeoutMsg: "Button is not enabled",
    });
    await this.element.addValue(value);
  }
}

module.exports = Button;
