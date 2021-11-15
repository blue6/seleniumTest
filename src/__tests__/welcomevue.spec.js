import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { getChromeDriver } from "../driver-factory";
import WelcomeVuePage from "../__pageobjects__/welcomevuepage";

let driver;
let welcomeVuePage;

beforeAll(async () => {
  driver = await getChromeDriver();
  await driver.navigate().to("http://localhost:8081/");
});

afterAll(async () => {
  await driver.quit();
});

describe("Welcome Vue page", () => {
  test("contains the correct welcome message", async () => {
    //await driver.sleep(1000);
    welcomeVuePage = new WelcomeVuePage(driver);
    expect(await welcomeVuePage.getHeadingText()).toEqual(
      "Welcome to Your Vue.js App !!!XXX"
    );
  });
});
