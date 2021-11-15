// import { driver } from "./driver-factory";
import { until } from "selenium-webdriver";

export const findElementBy = (driver) => (locator) => {
  const webElement = driver.wait(until.elementLocated(locator), 20000);
  return driver.wait(until.elementIsVisible(webElement), 20000);
};
