import { View } from "./view/view.js";
import { ProductList } from "./models/productList.js";
import { ReturnCoinList } from "./models/returnCoinList.js";
import { Product } from "./models/product.js";
import { pickRandomNumberInList } from "./utils/utils.js";

export class VendingMachineController {
    constructor() {
        this.view = new View();
        const mockProductList = [new Product({ name: '콜라', price: 1200, quantity: 20 })];
        this.productList = new ProductList(mockProductList);
        this.returnCoinList = new ReturnCoinList();
        this.view.registerProductPageButtonHandler(this.addProduct, this.productList.list);
        this.view.registerCoinChargePageButtonHandler(this.addReturnCoin, this.returnCoinList);
    }
    
    addProduct = (product) => {
        this.productList.list.push(product);
        this.view.renderProductList(this.productList.list);
    }
    
    addReturnCoin = (balance) => {
        let remainBalance = balance;
        while (remainBalance > 0) {
            const newCoin = pickRandomNumberInList([10, 50, 100, 500]);
            if (newCoin > remainBalance) {
                continue;
            }
            remainBalance -= newCoin;
            this.returnCoinList[ `coinQuantity${newCoin}` ] += 1;
        }
        this.view.renderChargedCoins(this.returnCoinList)
    }
}