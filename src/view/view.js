import { $ } from '../utils/utils.js';
import { SELECTOR, templates } from './viewConstans.js';
import {
    clearChildNode,
    renderTemplate,
    renderSection,
    clearClassNode,
    clearInput
} from "./viewHelper.js";
import { Product } from "../models/product.js";
import { VendingMachine } from "../models/vendingMachine.js";


export class View {
    constructor() {
        renderTemplate(SELECTOR.APP, templates.title);
        renderTemplate(SELECTOR.APP, templates.menu);
        renderTemplate(SELECTOR.APP, templates.pageArea);
        
        this.vendingMachine = new VendingMachine();
    }
    
    registerPurchasePageButtonHandler(callback, purchaseCallback) {
        $(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
            clearChildNode(SELECTOR.PAGE_AREA);
            renderSection('charge-user-balance', templates.chargeUserBalance);
            renderSection('purchase-item-list', templates.purchaseItemList);
            renderSection('returned-coin-list', templates.returnedCoinList);
            this.renderUserBalance(this.vendingMachine.userBalance.amount);
            this.renderPurchaseProductList(this.vendingMachine.products);
            this.registerPurchaseButtonHandler(purchaseCallback);
            this.registerChargeBalanceButtonHandler(callback);
        });
    }
    
    registerPurchaseButtonHandler(purchaseCallback) {
        document.querySelectorAll(SELECTOR.PURCHASE_ITEM_BUTTON).forEach((button, idx) => {
            const targetQuantity = this.vendingMachine.products[ idx ].quantity;
            if (targetQuantity <= 0) {
                button.disabled = true;
            }
            button.addEventListener('click', () => {
                purchaseCallback(idx);
            })
        });
    }
    
    registerChargeBalanceButtonHandler(callback) {
        const chargedBalance = $(SELECTOR.PURCHASE_CHARGE_INPUT);
        $(SELECTOR.PURCHASE_CHARGE_BUTTON).onclick = () => {
            callback(chargedBalance.valueAsNumber);
            this.renderUserBalance(this.vendingMachine.userBalance.amount);
            clearInput(SELECTOR.PURCHASE_CHARGE_INPUT);
        }
        
    }
    
    registerAddProductButtonHandler(callback) {
        $(SELECTOR.PRODUCT_ADD_BUTTON).addEventListener('click', () => {
            const name = $(SELECTOR.PRODUCT_NAME_INPUT).value;
            const price = $(SELECTOR.PRODUCT_PRICE_INPUT).valueAsNumber;
            const quantity = $(SELECTOR.PRODUCT_QUANTITY_INPUT).valueAsNumber;
            const newProduct = new Product({ name, price, quantity });
            callback(newProduct);
            this.renderProductList(this.vendingMachine.products);
            clearInput(SELECTOR.PRODUCT_NAME_INPUT);
            clearInput(SELECTOR.PRODUCT_PRICE_INPUT);
            clearInput(SELECTOR.PRODUCT_QUANTITY_INPUT);
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
    
    registerCoinChargePageButtonHandler(callback) {
        $(SELECTOR.COIN_MENU).addEventListener('click', () => {
            clearChildNode(SELECTOR.PAGE_AREA);
            renderSection('charge-coin-form', templates.chargeCoinForm);
            renderSection('charged-coin-list', templates.chargedCoinList);
            this.renderChargedCoins(this.vendingMachine.returnCoins);
            this.registerChargeCoinButtonHandler(callback);
        });
    }
    
    registerChargeCoinButtonHandler(callback) {
        const chargeBalance = $(SELECTOR.COIN_CHARGE_INPUT);
        $(SELECTOR.COIN_CHARGE_BUTTON).addEventListener("click", () => {
            callback(chargeBalance.valueAsNumber);
            this.renderChargedCoins(this.vendingMachine.returnCoins);
            clearInput(SELECTOR.COIN_CHARGE_INPUT);
        })
    }
    
    renderProductList(productList) {
        clearClassNode('product-list-item');
        productList.map((product) => {
            renderTemplate(SELECTOR.PRODUCT_TABLE, templates.productListItem(product))
        })
    }
    
    renderChargedCoins(chargedCoins) {
        $(SELECTOR.COIN_500).innerText = chargedCoins.COIN_500;
        $(SELECTOR.COIN_100).innerText = chargedCoins.COIN_100;
        $(SELECTOR.COIN_50).innerText = chargedCoins.COIN_50;
        $(SELECTOR.COIN_10).innerText = chargedCoins.COIN_10;
    }
    
    renderUserBalance(userBalance) {
        $(SELECTOR.PURCHASE_CHARGE_AMOUNT).innerHTML = templates.userBalance(userBalance);
    }
    
    renderPurchaseProductList(products) {
        clearClassNode('product-purchase-item');
        products.map((product) => {
            renderTemplate('#purchase-product-table', templates.purchaseProductItem(product));
        });
    }
}
