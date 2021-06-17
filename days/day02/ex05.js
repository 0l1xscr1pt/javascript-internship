class BankAccount {
    constructor() {
        this._open = false;
        this._balance = 0;
    }
    open() {
        if (this._open === false) {
            return this._open = true;
        } else {
            throw new ValueError;
        }
    }

    close() {
        //this._open = false
        this._balance = 0;
        if (this._open === true) {
            return this._open = false;
        } else {
            throw new ValueError;
        }
    }

    deposit(money) {
        if (this._open === true && money >= 0) {
            return this._balance = this._balance + money;
        } else {
            throw new ValueError;
        }
    }

    withdraw(money) {
        if (this._open === true && this._balance >= money && money >= 0) {
            return this._balance = this._balance - money;
        } else {
            throw new ValueError;
        }
    }

    get balance() {
        if (!this._open) throw new ValueError;
        return this._balance;
    }
}

class ValueError extends Error {
    constructor(message) {
        super(message);
        this.message = 'Value error !'
    }
}

module.exports = { ValueError, BankAccount }
