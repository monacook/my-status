const { Builder, By } = require('selenium-webdriver');
require("chromedriver")

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function example() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("mfkaj01@gmail.com");
        await driver.findElement(By.name("password")).sendKeys("fdafdafdafda");
        await driver.findElement(By.name("submit")).click();
        
    } catch (error) {
     console.log(error)   
    }
}

example();