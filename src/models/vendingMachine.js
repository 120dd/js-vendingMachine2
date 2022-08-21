import { Product } from "./product.js";

export class VendingMachine {
    constructor() {
        this.products = [Product.factory('콜라', 1200, 20)];
    }
    
    static factory() {
        return new VendingMachine();
    }
    
    addProduct(product) {
        this.products.push(product);
    }
}