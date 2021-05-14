const { Builder } = require('selenium-webdriver');
require("chromedriver")

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function openWebsites() {
    try{
        await driver.get("http://yahoo.com");
        await driver.get("http://google.com")
    } catch (error) {
        console.log(error)
    }
}

openWebsites();