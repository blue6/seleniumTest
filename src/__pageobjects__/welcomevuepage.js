import { By } from "selenium-webdriver";
import Page from "./page";

class WelcomeVuePage extends Page {
  constructor(driver) {
    super(driver);
  }

  get headingTextLocator() {
    return By.css("h1");
  }

  getHeadingText() {
    return this.findElementBy(this.headingTextLocator).getText();
  }
}

export default WelcomeVuePage;
