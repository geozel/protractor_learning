describe('get text from protractor demo site calculators history', function () {

    it('should find elements under parent', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text+" is the result")
        })

    });

});