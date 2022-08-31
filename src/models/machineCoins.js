export class MachineCoins {
    constructor(initialCoins = {
        coinQuantity500: 0,
        coinQuantity100: 0,
        coinQuantity50: 0,
        coinQuantity10: 0,
    }) {
        this.coinQuantity500 = initialCoins.coinQuantity500;
        this.coinQuantity100 = initialCoins.coinQuantity100;
        this.coinQuantity50 = initialCoins.coinQuantity50;
        this.coinQuantity10 = initialCoins.coinQuantity10;
    }
    
    changeCoin(target, quantity) {
        this[ `coinQuantity${target}` ] += quantity;
    }
    
    resetCoins() {
        this.coinQuantity500 = 0;
        this.coinQuantity100 = 0;
        this.coinQuantity50 = 0;
        this.coinQuantity10 = 0;
    }
}