import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { driver } from "../driver-factory";
import WelcomeVuePage from "../__pageobjects__/welcomevuepage";

const testVueUrl = process.env.TESTVUE_URL || "http://localhost:8081/";
//const testVueUrl = "http://192.168.0.2:8080/";

beforeAll(async () => {
  await driver.navigateTo(testVueUrl);
});

afterAll(async () => {
  await driver.quit();
});

describe("Welcome Vue page", () => {
  test("contains the correct welcome message", async () => {
    //await driver.internalDriver.sleep(1000);
    //console.log(await driver.internalDriver.getPageSource());

    expect(await WelcomeVuePage.getHeadingText()).toEqual(
      "Welcome to Your Vue.js App !!!XXX"
    );
  });
});
