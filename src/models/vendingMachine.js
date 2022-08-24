export class VendingMachine {
    constructor(productList = []) {
        if (VendingMachine.instance) {
            return VendingMachine.instance
        }
        this.products = [...productList];
        VendingMachine.instance = this
    }
    
    addProduct(product) {
        this.products.push(product);
    }
}