class BaseComponent {
  getCSSPropertyValue = async (element, propertyName) => {
    const property = await element.getCSSProperty(propertyName);
    return property.value;
  };

  changeElementDisplay = async (element, value) => {
    await browser.execute(
      (element) => {
        element.style.display = value;
      },
      element,
      value
    );
  };

  hideCaptchaMessage = async (captchaElement) => {
    const captchaDisplay = this.getCSSPropertyValue(captchaElement, "display");

    if (captchaDisplay === "block") {
      await this.changeElementDisplay(captchaElement, "none");
    }
  };

  getTextToLowerCase = async (element) => {
    const text = await element.getText();
    return text.toLowerCase();
  };

  eraseInputValues = async (input, numberOfValues) => {
    const backspace = "\uE003";

    for (let i = 0; i < numberOfValues; i++) {
      await input.addValue(backspace);
    }
  };

  getLastElement = async (list) => {
    const elements = await list;
    const lastIndex = elements.length - 1;
    return elements[lastIndex];
  };
}

module.exports = BaseComponent;
