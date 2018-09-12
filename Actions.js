describe('Actions demo',function() {


    it('Open Posse website',function() {
//moving the mouse into that textbox
//sendkeys
//keyboard arrow
//Keyboard enter
        browser.get("https://posse.com/");
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();



        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
        {

            browser.sleep(2000);

        })

    })
})