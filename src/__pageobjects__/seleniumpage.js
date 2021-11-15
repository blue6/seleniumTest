import { By } from "selenium-webdriver";
import Page from "./page";

class SeleniumPage extends Page {
  constructor(driver) {
    super(driver);
  }

  get headingTextLocator() {
    return By.css("#firstHeading");
  }

  get repositoryUrlLocator() {
    return By.className("plainlist");
  }

  getHeadingText() {
    return this.findElementBy(this.headingTextLocator).getText();
  }

  getRepositoryUrlText() {
    return this.findElementBy(this.repositoryUrlLocator).getText();
  }
}

export default SeleniumPage;
