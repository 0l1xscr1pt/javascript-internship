class BankAccount {
    constructor() {
        this._open = false;
        this._balance = 0;
    }
    open() {
        return this._open = true;
    }

    close() {
        return this._open = false;
    }

    deposit(money) {
        if (BankAccount._open = true && money >= 0) {
            return this._balance = this._balance + money;
        } else {
            throw new ValueError;
        }
    }

    withdraw(money) {
        if (BankAccount._open = true && this._balance >= money) {
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
