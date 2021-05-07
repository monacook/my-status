const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("http://localhost:3001/");
    await driver.findElement(By.name("q")).sendKeys("Hey DipShit. You dah best!");
    await driver.findElement(By.name("submit")).click();   
};

example();