import { until } from "selenium-webdriver";
import { driver } from "./driver-factory";

export const findElementBy = (locator) => {
  const internalDriver = driver.internalDriver;
  const webElement = internalDriver.wait(until.elementLocated(locator), 20000);
  return internalDriver.wait(until.elementIsVisible(webElement), 20000);
};
