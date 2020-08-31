let {SendMessage} = require ("../src/mocks_and_spies")

describe('should toString() test', function(){
    let user = new SendMessage('0656221180','changed');
    it('should be able to call function getNumber()',function(){

        spyOn(user, "getNumber");

        user.getNumber('0656221180','changed');
        expect(user.getNumber).toHaveBeenCalled();
        expect(user.getNumber).toHaveBeenCalledTimes(1);
        expect(user.getNumber).toHaveBeenCalledWith('0656221180','changed');
    });
   
    it('should be able to call function getMessage() with a variable',function(){

        spyOn(user, "getMessage");
        
        user.getMessage('0656221180','changed');
        
        expect(user.getMessage).toHaveBeenCalled();
        expect(user.getMessage).toHaveBeenCalledTimes(1);
        expect(user.getMessage).toHaveBeenCalledWith('0656221180','changed');
});
});