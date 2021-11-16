import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { driver } from "../driver-factory";
import WelcomeVuePage from "../__pageobjects__/welcomevuepage";

beforeAll(async () => {
  await driver.navigateTo("http://localhost:8081/");
});

afterAll(async () => {
  await driver.quit();
});

describe("Welcome Vue page", () => {
  test("contains the correct welcome message", async () => {
    //await driver.sleep(1000);

    expect(await WelcomeVuePage.getHeadingText()).toEqual(
      "Welcome to Your Vue.js App !!!XXX"
    );
  });
});
