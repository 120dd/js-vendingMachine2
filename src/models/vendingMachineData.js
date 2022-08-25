import { ProductList } from "./productList.js";
import { ReturnCoinList } from "./returnCoinList.js";
import { Product } from "./product.js";

export class VendingMachineData {
    constructor() {
        const mockProductList = [new Product({ name: '콜라', price: 1200, quantity: 20 })];
        this.productList = new ProductList(mockProductList);
        this.returnCoinList = new ReturnCoinList();
        this.userBalance = 0
    }
}