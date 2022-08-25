export class VendingMachineData {
    constructor(productList = []) {
        this.productList = [...productList];
        this.returnCoinList = {
            'coinQuantity500': 0,
            'coinQuantity100': 0,
            'coinQuantity50': 0,
            'coinQuantity10': 0,
        };
        this.userBalance = 0
    }
}