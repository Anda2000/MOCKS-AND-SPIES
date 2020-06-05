let myTest = require ("../src/mocks and spies")

describe('should toString() test', function(){
    it('should be able to call function getNumber()',function(){

        var user = new SendMessage('0656221180','changed');

        spyOn(user, "getNumber");

        user.toString();

        expect(user.getNumber).toBeCalled();
    });
   
    it('should be able to call function getMessage() with a variable',function(){

        var user = new SendMessage('0656221180','changed');

        spyOn(user, "getMessage");

        user.toString();
        
        expect(user.getMessage).toBeCalled();
});
});