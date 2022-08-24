import { $ } from '../utils/utils.js';
import { SELECTOR, templates } from './viewConstans.js';
import { clearNode, renderBody, renderSection } from "./viewHelper.js";
import { Product } from "../models/product.js";

export class View {
    constructor() {
        renderBody(SELECTOR.APP, templates.title);
        renderBody(SELECTOR.APP, templates.menu);
        renderBody(SELECTOR.APP, templates.pageArea);
        
        $(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
            clearNode(SELECTOR.PAGE_AREA);
            renderSection('add-product-form', templates.addProductForm);
            renderSection('added-product-list', templates.addedProductList);
            this.registerAddProductButtonHandler();
        });
        $(SELECTOR.COIN_MENU).addEventListener('click', () => {
            clearNode(SELECTOR.PAGE_AREA);
            renderSection('charge-coin-form', templates.chargeCoinForm);
            renderSection('charged-coin-list', templates.chargedCoinList);
        });
        $(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
            clearNode(SELECTOR.PAGE_AREA);
            renderSection('charge-user-balance', templates.chargeUserBalance);
            renderSection('purchase-item-list', templates.purchaseItemList);
            renderSection('returned-coin-list', templates.returnedCoinList);
        });
    }
    
    registerAddProductButtonHandler() {
        $(SELECTOR.PRODUCT_ADD_BUTTON).addEventListener('click', () => {
            const productName = $(SELECTOR.PRODUCT_NAME_INPUT).value;
            const productPrice = $(SELECTOR.PRODUCT_PRICE_INPUT).value;
            const productQuantity = $(SELECTOR.PRODUCT_QUANTITY_INPUT).value;
            const newProduct = new Product(productName, productPrice, productQuantity);
            console.log(newProduct);
        });
    }
    
    // renderAddProductSection() {
    //     const form = createElement('div', {
    //         innerHTML: TEMPLATES.PRODUCT_ADD_FORM,
    //         id: 'productAddForm',
    //     });
    //
    //     if (!document.querySelector('#productAddForm')) {
    //         this.renderTab(this.$productTab);
    //     }
    //
    //     $(SELECTOR.TAB_AREA).appendChild(tab);
    // }
    //
    //
    // registerProductTabButtonClickEvent(callback, productList) {
    //     $(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
    //         this.renderTab(this.$productTab);
    //         this.renderProductList(productList);
    //         this.registerAddProductButtonHandler(callback, productList);
    //         this.initialized.addProduct = true;
    //     });
    // }
    //
    // registerAddProductButtonHandler(callback, productList) {
    //     if (!this.initialized.addProduct) {
    //         $(SELECTOR.PRODUCT_ADD_BUTTON).addEventListener('click', () => {
    //             const productName = $(SELECTOR.PRODUCT_NAME_INPUT).value;
    //             const productPrice = $(SELECTOR.PRODUCT_PRICE_INPUT).value;
    //             const productQuantity = $(SELECTOR.PRODUCT_QUANTITY_INPUT).value;
    //             const newProduct = new Product(productName, productPrice, productQuantity);
    //             callback(newProduct);
    //             this.renderProductList(productList);
    //         });
    //     }
    // }
    //
    // renderProductList(productList) {
    //     this.removeAllChild($(SELECTOR.PRODUCT_TABLE));
    //     this.renderProductTableHeader();
    //     productList.map(product => {
    //         this.renderProductListItem(product);
    //     });
    // }
    //
    // renderProductTableHeader() {
    //     const tableHeader = this.createElement('tr', TEMPLATES.PRODUCT_TABLE_HEAD);
    //     $(SELECTOR.PRODUCT_TABLE).appendChild(tableHeader);
    // }
    //
    // renderProductListItem(product) {
    //     const newProduct = this.createElement('tr', TEMPLATES.PRODUCT_TABLE_ITEM(product));
    //     $(SELECTOR.PRODUCT_TABLE).appendChild(newProduct);
    // }
}
