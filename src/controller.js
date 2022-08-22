import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";
import { Product } from "./models/product.js";

export class Controller {
    constructor() {
        this.view = new View();
        const mockProductList = [new Product('콜라', 1200, 20)];
        this.vendingMachine = new VendingMachine(mockProductList);
        this.view.initUi();
        this.view.initHandlers();
        this.view.registerProductManageButtonClickEvent(this.requestAddProduct, this.vendingMachine.products);
    }
    
    requestAddProduct = (product) => {
        this.vendingMachine.addProduct(product);
        console.log(this.vendingMachine);
        this.view.renderProductList(this.vendingMachine.products);
    }
}