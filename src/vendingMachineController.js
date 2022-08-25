import { View } from "./view/view.js";
import { Product } from "./models/product.js";
import { pickRandomNumberInList } from "./utils/utils.js";
import { VendingMachineData } from "./models/vendingMachineData.js";

export class VendingMachineController {
    constructor() {
        this.view = new View();
        const mockProductData = [new Product({ name: '콜라', price: 1200, quantity: 20 })];
        this.data = new VendingMachineData(mockProductData);
        this.view.registerProductPageButtonHandler(this.addProduct, this.data.productList);
        this.view.registerCoinChargePageButtonHandler(this.addReturnCoin, this.data.returnCoinList);
    }
    
    addProduct = (product) => {
        this.data.productList.push(product);
        this.view.renderProductList(this.data.productList);
    }
    
    addReturnCoin = (balance) => {
        let remainBalance = balance;
        while (remainBalance > 0) {
            const newCoin = pickRandomNumberInList([10, 50, 100, 500]);
            if (newCoin > remainBalance) {
                continue;
            }
            remainBalance -= newCoin;
            this.data.returnCoinList[ `coinQuantity${newCoin}` ] += 1;
        }
        this.view.renderChargedCoins(this.data.returnCoinList);
    }
}