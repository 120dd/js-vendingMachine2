let instance;

export class VendingMachine {
    constructor(productList = []) {
        if (instance) {
            return instance
        }
        this.products = [...productList];
        instance = this
    }
    
    addProduct(product) {
        this.products.push(product);
    }
}