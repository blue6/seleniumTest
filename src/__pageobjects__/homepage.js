import { By } from "selenium-webdriver";
import Page from "./page";
import SeleniumPage from "./seleniumpage";

class HomePage extends Page {
  constructor(driver) {
    super(driver);
  }

  get searchInputLocator() {
    return By.css("#searchInput");
  }

  get searchButtonLocator() {
    return By.xpath(
      "//button[@class='pure-button pure-button-primary-progressive']"
    );
  }

  get searchLanguageLocator() {
    return By.xpath("//select[@id='searchLanguage']/option[@value='en']");
  }

  searchLanguageSelect() {
    return this.findElementBy(this.searchLanguageLocator).click();
  }

  wikiSearch(item) {
    return this.findElementBy(this.searchInputLocator).sendKeys(item);
  }

  async searchButton() {
    await this.findElementBy(this.searchButtonLocator).click();
    return new SeleniumPage(this.driver);
  }
}

export default HomePage;
