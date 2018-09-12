describe('Protractor Element Demo', function () {

    it('Locators', function () {

        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("5");


        element(by.id("gobutton")).click();

        element(by.css("h2[class='ng-binding']")).getText().then(function(text){


            expect(true).toBe(true);

            console.log(text+" is the result.")

        })

    });
});