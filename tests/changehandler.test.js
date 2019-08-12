let { ChangeHandler } = require("../src/changehandler");

describe("ChangeHandler", function() {
    describe("constructor", function(){

        test("5.a. amountDue is set based on an argument",function(){
            let changeHandler = new ChangeHandler(105);
expect(changeHandler.amountDue).toBe(105);
        
    });
    // Set up a test below...
    test("5.b. cashTendered is set to zero", function() {
        let changeHandler=new changeHandler();
        // Remember, you can arrange, act, and assert...start small
        expect(changeHandler.cashTendered).toBe();
    })

})

describe("insertCoin", function(){
    test('6.a. Inserting a quarter adds 25.", function(){
        let changeHandler = new ChangeHandler (25);
        change.Handler.insertCoin("quarter")
        expect(changeHandler.cashTendered).toBe(25)
    })
    test('6.a. Inserting a dime adds 10.", function(){
        let changeHandler = new ChangeHandler (10);
        change.Handler.insertCoin(dime)
        expect(changeHandler.cashTendered).toBe(10);
         
    })
    test('6.a. Inserting a nickel adds 5.", function(){
        let changeHandler = new ChangeHandler (5);
        change.Handler.insertCoin("nickel")
         expect (changeHandler.cashTendered).toBe(5);
    })
    test('6.a. Inserting a penny adds 1.", function(){
        let changeHandler = new ChangeHandler (1);
        change.Handler.insertCoin("penny")
         expect (changeHandler.cashTendered).toBe(1);
    })
    test("6.e Calling function multiple times adds to amount")
};