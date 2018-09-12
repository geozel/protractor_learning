describe('Getting the list of Elements with All method', function () {

    it('should work', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("4");

        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("6");
        element(by.model("second")).sendKeys("7");

        element(by.id("gobutton")).click();

        element.all(by.repeater("result in memory")).count().then(function(total){

            console.log(total+" is the number of rows")
        })

        element.all(by.repeater("result in memory")).each(function (item){

            item.element(by.css("td:nth-child(3)")).getText().then(function(text){

                   console.log(text+" is the actual item")
            })

        })

    })

})