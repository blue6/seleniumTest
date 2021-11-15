import { findElementBy } from "../utils";

class Page {
  constructor(driver) {
    this.driver = driver;
    this.findElementBy = findElementBy(driver);
  }
}

export default Page;
