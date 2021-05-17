const { Builder, By } = require('selenium-webdriver');
require("chromedriver")

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function example() {
    try {
        await driver.get("http://localhost:3000/");
        await driver.findElement(By.name("q")).sendKeys("This is a test!");
        await driver.findElement(By.name("submit")).click();
        
    } catch (error) {
     console.log(error)   
    }
}

example();