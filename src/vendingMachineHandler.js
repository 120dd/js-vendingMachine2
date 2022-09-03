import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";
import { validEnoughMoney, validMoneyInput, validNameInput, validQuantityInput } from "./validator.js";

export class VendingMachineHandler {
    constructor(initialData) {
        this.vendingMachine = new VendingMachine(initialData);
        this.view = new View();
        this.view.registerProductPageButtonHandler(this.requestAddProduct);
        this.view.registerCoinChargePageButtonHandler(this.requestChargeCoin);
        this.view.registerPurchasePageButtonHandler(
            this.requestChargeBalance,
            this.requestPurchaseProduct,
            this.requestReturnCoin,
        );
    }
    
    requestReturnCoin = () => {
        this.vendingMachine.returnCoins();
        this.view.renderReturnedCoins(this.vendingMachine.getReturnCoins());
        this.view.renderUserBalance(this.vendingMachine.getUserBalanceQuantity());
        this.vendingMachine.resetReturnCoins();
    }
    
    requestAddProduct = (product) => {
        const validResults = [
            validNameInput(product.name).code,
            validMoneyInput(product.price).code,
            validQuantityInput(product.quantity).code,
        ]
        if (validResults.some(result=>result !=='SUCCESS')){
            this.view.showAlert(validResults.find(result=>result!=="SUCCESS"))
            return;
        }
        this.vendingMachine.addProduct(product);
    }
    
    requestChargeCoin = (balance) => {
        const validResult = validMoneyInput(balance);
        if (validResult.code !== 'SUCCESS'){
            this.view.showAlert(validResult.code);
            return;
        }
        this.vendingMachine.addMachineCoin(balance);
    }
    
    requestChargeBalance = (balance) => {
        const validResult = validMoneyInput(balance);
        if (validResult.code !== 'SUCCESS'){
            this.view.showAlert(validResult.code);
            return;
        }
        this.vendingMachine.addUserBalance(balance);
    }
    
    requestPurchaseProduct = (idx) => {
        const productPrice = this.vendingMachine.getProduct(idx).price;
        const userBalance = this.vendingMachine.getUserBalanceQuantity();
        const validResult = validEnoughMoney(productPrice,userBalance);
        if (validEnoughMoney(productPrice,userBalance).code !== 'SUCCESS'){
            this.view.showAlert(validResult.code);
            return;
        }
        this.vendingMachine.purchaseProduct(idx);
        this.view.renderUserBalance(this.vendingMachine.getUserBalanceQuantity());
        this.view.renderPurchaseProductList(this.vendingMachine.getProducts());
        this.view.registerPurchaseButtonHandler(this.requestPurchaseProduct);
    }
}