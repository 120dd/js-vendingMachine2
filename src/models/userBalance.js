export class UserBalance {
    constructor(initialBalance) {
        this.quantity = initialBalance.quantity;
        this.currency = initialBalance.currency;
    }

    changeQuantity(quantity){
        this.quantity += quantity;
    }
    
    setNewQuantity(quantity){
        this.quantity = quantity;
    }
}