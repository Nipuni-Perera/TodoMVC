const{Builder, By, Key, util}= require("selenium-webdriver");
async function example(){
let driver=await new Builder().forBrowser("chrome").build();
await driver.get("https://www.wikipedia.org/");
await driver.manage().window().maximize();
await driver.findElement(By.id("searchInput")).sendKeys("Sri Lanka",Key.RETURN);

}
example();