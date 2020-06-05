class SendMessage {
    constructor(number, message){
        this.number = number;
        this.message = message;
    }

    getNumber(){
        return this.number;
    }
    getMessage(){
        return this.message;
    }

    toString(){
        console.log(`${this.getNumber()} has ${this.getMessage()}`)
        return (`${this.getNumber()} has ${this.getMessage()}`)
    }
}

var user = new SendMessage ('0656221180', 'changed');
user.toString();

module.exports = {
    SendMessage
}