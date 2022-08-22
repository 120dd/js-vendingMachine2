export class VendingMachine {
    constructor(productList = []) {
        this.products = [...productList];
    }
    
    addProduct(product) {
        this.products.push(product);
    }
}