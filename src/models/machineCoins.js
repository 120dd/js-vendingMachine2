export class MachineCoins {
    constructor(initialCoins) {
        this.coinQuantity500 = initialCoins.coinQuantity500;
        this.coinQuantity100 = initialCoins.coinQuantity100;
        this.coinQuantity50 = initialCoins.coinQuantity50;
        this.coinQuantity10 = initialCoins.coinQuantity10;
    }

    changeCoin(target,amount){
        this[`coinQuantity${target}`] += amount;
    }
}