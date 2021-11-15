import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { getChromeDriver } from "../driver-factory";
import HomePage from "../__pageobjects__/homepage";

let driver;
let homePage;
let seleniumPage;

beforeAll(async () => {
  driver = await getChromeDriver();
  await driver.navigate().to("https://wikipedia.org");
});

afterAll(async () => {
  await driver.quit();
});

describe("Selenium wiki page", () => {
  test("should be opened as successfully", async () => {
    //await driver.sleep(1000);
    homePage = new HomePage(driver);
    await homePage.searchLanguageSelect();
    await homePage.wikiSearch("Selenium (software)");
    seleniumPage = await homePage.searchButton();
    expect(await seleniumPage.getHeadingText()).toEqual("Selenium (software)");
  });

  test("contains the correct repository URL", async () => {
    expect(await seleniumPage.getRepositoryUrlText()).toEqual(
      "github.com/SeleniumHQ/"
    );
  });
});
