import { $ } from '../utils/utils.js';
import { SELECTOR, TEMPLATES } from './viewConstans.js';
import { Product } from "../models/product.js";

export class View {
    constructor() {
        this.$header = this.createElement('header', TEMPLATES.HEADER);
        this.$tabArea = this.createElement('div', '');
        this.$productTab = this.createElement('div', TEMPLATES.PRODUCT_MENU);
        this.$machineTab = this.createElement('div', TEMPLATES.MACHINE_MENU);
        this.$purchaseTab = this.createElement('div', TEMPLATES.PURCHASE_MENU);
        this.initialized = {
            addProduct: false,
        }
        this.initUi();
        this.initHandlers();
    }
    
    initUi() {
        // header
        $(SELECTOR.APP).appendChild(this.$header);
        
        // tab area
        this.createTabArea();
        this.$tabArea.setAttribute('id', 'tab-area');
        $(SELECTOR.APP).appendChild(this.$tabArea);
    }
    
    initHandlers() {
        $(SELECTOR.COIN_MENU).addEventListener('click', () => {
            this.renderTab(this.$machineTab);
        });
        
        $(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
            this.renderTab(this.$purchaseTab);
        });
    }
    
    registerProductTabButtonClickEvent(callback, productList) {
        $(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
            this.renderTab(this.$productTab);
            this.renderProductList(productList);
            this.registerAddProductButtonHandler(callback, productList);
            this.initialized.addProduct = true;
        });
    }
    
    renderTab(tab) {
        this.removeAllChild($(SELECTOR.TAB_AREA));
        $(SELECTOR.TAB_AREA).appendChild(tab);
    }
    
    createElement(tagName, innerHtml) {
        const newElement = document.createElement(tagName);
        newElement.innerHTML = innerHtml;
        return newElement;
    }
    
    createTabArea() {
        $(SELECTOR.APP).appendChild(this.$tabArea);
    }
    
    registerAddProductButtonHandler(callback, productList) {
        if (!this.initialized.addProduct) {
            $(SELECTOR.PRODUCT_ADD_BUTTON).addEventListener('click', () => {
                const productName = $(SELECTOR.PRODUCT_NAME_INPUT).value;
                const productPrice = $(SELECTOR.PRODUCT_PRICE_INPUT).value;
                const productQuantity = $(SELECTOR.PRODUCT_QUANTITY_INPUT).value;
                const newProduct = new Product(productName, productPrice, productQuantity);
                callback(newProduct);
                this.renderProductList(productList);
            });
        }
    }
    
    renderProductList(productList) {
        this.removeAllChild($(SELECTOR.PRODUCT_TABLE));
        this.renderProductTableHeader();
        productList.map(product => {
            this.renderProductListItem(product);
        });
    }
    
    renderProductTableHeader() {
        const tableHeader = this.createElement('tr', TEMPLATES.PRODUCT_TABLE_HEAD);
        $(SELECTOR.PRODUCT_TABLE).appendChild(tableHeader);
    }
    
    renderProductListItem(product) {
        const newProduct = this.createElement('tr', TEMPLATES.PRODUCT_TABLE_ITEM(product));
        $(SELECTOR.PRODUCT_TABLE).appendChild(newProduct);
    }
    
    removeAllChild(targetNode) {
        while (targetNode.hasChildNodes()) {
            targetNode.removeChild(targetNode.firstChild)
        }
    }
}
