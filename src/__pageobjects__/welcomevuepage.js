import { By } from "selenium-webdriver";
import { findElementBy } from "../utils";

class WelcomeVuePage {
  get headingTextLocator() {
    return By.css("h1");
  }

  getHeadingText() {
    return findElementBy(this.headingTextLocator).getText();
  }
}

export default new WelcomeVuePage();
