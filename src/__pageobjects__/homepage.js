import { By } from "selenium-webdriver";
import { findElementBy } from "../utils";

class HomePage {
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
    return findElementBy(this.searchLanguageLocator).click();
  }

  wikiSearch(item) {
    return findElementBy(this.searchInputLocator).sendKeys(item);
  }

  async searchButton() {
    return findElementBy(this.searchButtonLocator).click();
  }
}

export default new HomePage();
