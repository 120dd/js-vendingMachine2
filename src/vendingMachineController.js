import { View } from "./view/view.js";
import { ProductList } from "./models/productList.js";
import { ReturnCoinList } from "./models/returnCoinList.js";
import { Product } from "./models/product.js";
import { pickRandomNumberInList } from "./utils/utils.js";
import { VendingMachineData } from "./models/vendingMachineData.js";

export class VendingMachineController {
    constructor() {
        this.view = new View();
        this.data = new VendingMachineData();
        this.view.registerProductPageButtonHandler(this.addProduct, this.data.productList.list);
        this.view.registerCoinChargePageButtonHandler(this.addReturnCoin, this.data.returnCoinList);
    }
    
    addProduct = (product) => {
        this.data.productList.list = [...this.data.productList.list, product]
        this.view.renderProductList(this.data.productList.list);
    }
    
    addReturnCoin = (balance) => {
        let remainBalance = balance;
        const newCoinList = { ...this.data.returnCoinList };
        while (remainBalance > 0) {
            const newCoin = pickRandomNumberInList([10, 50, 100, 500]);
            if (newCoin > remainBalance) {
                continue;
            }
            remainBalance -= newCoin;
            newCoinList[ `coinQuantity${newCoin}` ] += 1;
        }
        this.data.returnCoinList = newCoinList;
        this.view.renderChargedCoins(this.data.returnCoinList);
    }
}