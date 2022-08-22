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
    }
    
    static factory() {
        return new View();
    }
    
    initUi() {
        // header
        $(SELECTOR.APP).appendChild(this.$header);
        
        // tab area
        this.createTabArea();
        this.$tabArea.setAttribute('id', 'tab-area');
        $(SELECTOR.APP).appendChild(this.$tabArea);
    }
    
    initHandlers(handlers) {
        $(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
            this.renderTab(this.$productTab);
            this.registerAddProductButtonHandler(handlers.addProduct);
            this.initialized.addProduct = true;
        });
        
        $(SELECTOR.COIN_MENU).addEventListener('click', () => {
            this.renderTab(this.$machineTab);
        });
        
        $(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
            this.renderTab(this.$purchaseTab);
        });
    }
    
    renderTab(tab) {
        this.clearTabArea();
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
    
    clearTabArea() {
        if ($(SELECTOR.TAB_AREA).hasChildNodes()) {
            $(SELECTOR.TAB_AREA).firstChild.remove();
        }
    }
    
    registerAddProductButtonHandler(callback) {
        if (!this.initialized.addProduct) {
            $(SELECTOR.PRODUCT_ADD_BUTTON).addEventListener('click', () => {
                const productName = $(SELECTOR.PRODUCT_NAME_INPUT).value;
                const productPrice = $(SELECTOR.PRODUCT_PRICE_INPUT).value;
                const productQuantity = $(SELECTOR.PRODUCT_QUANTITY_INPUT).value;
                const newProduct = Product.factory(productName, productPrice, productQuantity);
                callback(newProduct);
            });
        }
    }
}
