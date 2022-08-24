import { $ } from '../utils/utils.js';
import { SELECTOR, templates } from './viewConstans.js';
import { clearChildNode, renderTemplate, renderSection, clearClassNode } from "./viewHelper.js";
import { Product } from "../models/product.js";
import { VendingMachine } from "../models/vendingMachine.js";

export class View {
    constructor() {
        const mockProductList = [new Product('콜라', 1200, 20)];
        this.vendingMachine = new VendingMachine(mockProductList);
        renderTemplate(SELECTOR.APP, templates.title);
        renderTemplate(SELECTOR.APP, templates.menu);
        renderTemplate(SELECTOR.APP, templates.pageArea);
        
        $(SELECTOR.COIN_MENU).addEventListener('click', () => {
            clearChildNode(SELECTOR.PAGE_AREA);
            renderSection('charge-coin-form', templates.chargeCoinForm);
            renderSection('charged-coin-list', templates.chargedCoinList);
        });
        $(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
            clearChildNode(SELECTOR.PAGE_AREA);
            renderSection('charge-user-balance', templates.chargeUserBalance);
            renderSection('purchase-item-list', templates.purchaseItemList);
            renderSection('returned-coin-list', templates.returnedCoinList);
        });
    }
    
    registerAddProductButtonHandler(callback) {
        $(SELECTOR.PRODUCT_ADD_BUTTON).addEventListener('click', () => {
            const productName = $(SELECTOR.PRODUCT_NAME_INPUT).value;
            const productPrice = $(SELECTOR.PRODUCT_PRICE_INPUT).value;
            const productQuantity = $(SELECTOR.PRODUCT_QUANTITY_INPUT).value;
            const newProduct = new Product(productName, productPrice, productQuantity);
            callback(newProduct);
        });
    }
    
    registerProductPageButtonHandler(callback) {
        $(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
            clearChildNode(SELECTOR.PAGE_AREA);
            renderSection('add-product-form', templates.addProductForm);
            renderSection('added-product-list', templates.addedProductList);
            this.renderProductList(this.vendingMachine.products);
            this.registerAddProductButtonHandler(callback);
        });
    }
    
    renderProductList(productList) {
        clearClassNode('product-list-item');
        productList.map((product) => {
            renderTemplate(SELECTOR.PRODUCT_TABLE, templates.productListItem(product))
        })
    }
}
