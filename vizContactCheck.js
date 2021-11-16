const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const path = require("chromedriver").path;
const screen = {
  width: 640,
  height: 480,
};

chrome.setDefaultService(new chrome.ServiceBuilder(path).build());

(async function myFunction() {
  let driver = await new Builder()
    .forBrowser("chrome")
    // for headless setting
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  //your code inside this block
  // console.log(path);
  try {
    // Navigate to Url
    await driver.get("https://visualizing.info/contact");

    // Enter text "cheese" and perform keyboard action "Enter"
    await driver.findElement(By.name("your-name")).sendKeys("dt");
    await driver
      .findElement(By.name("your-email"))
      .sendKeys("dt1393@yahoo.co.jp");
    await driver.findElement(By.name("your-subject")).sendKeys("dt");
    await driver.findElement(By.name("your-message")).sendKeys("dt");
    await driver
      .findElement(By.className("wpcf7-form-control wpcf7-submit"))
      .click();
    let result = await driver.wait(
      until.elementLocated(By.className("wpcf7-response-output")),
      10000
    );
    console.log(await result.getText());

    //await driver.sleep(10000);
    /*

    
    */
  } finally {
    await driver.quit();
  }
})();
