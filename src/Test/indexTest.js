const { Builder } = require('selenium-webdriver')
const safari = require('selenium-webdriver/safari')
const proxy = require('selenium-webdriver/proxy')
const options = new safari.Options()
const proxyServer = "182.160.124.26:8081"


const driver = new Builder()
    .forBrowser('safari')
    .setProxy(proxy.manual({
        http: proxyServer,
        https: proxyServer
    }))
    .build()

    driver.get("https://www.google.com/")