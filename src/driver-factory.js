import { Builder } from "selenium-webdriver";
import { Browser, PageLoadStrategy } from "selenium-webdriver/lib/capabilities";
import chrome from "selenium-webdriver/chrome";
//import { path } from "chromedriver";
//chrome.setDefaultService(new chrome.ServiceBuilder(path).build());

class DriverFactory {
  constructor() {
    this._driver = null;
  }

  get internalDriver() {
    this._driver =
      this._driver ||
      new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(
          new chrome.Options()
            .setPageLoadStrategy(PageLoadStrategy.NORMAL)
            .addArguments([
              "--ignore-certificate-errors",
              "--disable-extensions",
              "--disable-popup-blocking",
              "enable-automation",
              "--no-sandbox",
              "--disable-setuid-sandbox",
              "--remote-debugging-port=9222",
            ])
            .headless()
        )
        .build();
    return this._driver;
  }

  async navigateTo(url) {
    await this.internalDriver.navigate().to(url);
  }

  async quit() {
    await this.internalDriver.quit();
    this._driver = null;
  }
}

export const driver = new DriverFactory();
