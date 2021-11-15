import { Builder } from "selenium-webdriver";
import { Browser, PageLoadStrategy } from "selenium-webdriver/lib/capabilities";
import chrome from "selenium-webdriver/chrome";
//import { path } from "chromedriver";

export const getChromeDriver = async () => {
  //chrome.setDefaultService(new chrome.ServiceBuilder(path).build());

  const driver = await new Builder()
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
  return driver;
};

//export const driver = getChromeDriver();
