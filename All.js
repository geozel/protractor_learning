describe('Getting the list of Elements with All method', function () {
    function Add(a,b){
          element(by.model("first")).sendKeys(a);
          element(by.model("second")).sendKeys(b);
    }

    it('should work', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        Add(3,5);
        element(by.id("gobutton")).click();

        Add(1,4);
        element(by.id("gobutton")).click();

        Add(2,7);
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