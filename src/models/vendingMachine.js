export class VendingMachine {
    constructor(productList) {
        productList ? this.products = [...productList] : this.products = []
    }
    
    addProduct(product) {
        this.products.push(product);
    }
}