import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";
import {
    validEnoughMoney,
    validMoneyInput,
    validNameInput,
    validQuantityInput
} from "./validator.js";
import { VALID_CODE_MESSAGES } from "./constans/validConstans.js";
import { LocalDataPersister } from "./localDataPersister.js";

export class VendingMachineHandler {
    constructor(initialData) {
        this.dataPersister = new LocalDataPersister();
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
        this.dataPersister.setData('userBalance',this.vendingMachine.getUserBalance());
        this.vendingMachine.resetReturnCoins();
    }
    
    requestAddProduct = (product) => {
        const validResults = [
            validNameInput(product.name).code,
            validMoneyInput(product.price).code,
            validQuantityInput(product.quantity).code,
        ]
        const errors = validResults.filter(result => result !== VALID_CODE_MESSAGES.SUCCESS);
        if (errors.length !== 0) {
            this.view.showAlert(errors[ 0 ]);
            return;
        }
        this.vendingMachine.addProduct(product);
        this.dataPersister.setData('products',this.vendingMachine.getProducts());
    }
    
    requestChargeCoin = (balance) => {
        if (this.alertIfNotSuccess(validMoneyInput(balance).code)) {
            this.vendingMachine.addMachineCoin(balance);
            this.dataPersister.setData('machineCoins',this.vendingMachine.getMachineCoins());
        }
    }
    
    requestChargeBalance = (balance) => {
        if (this.alertIfNotSuccess(validMoneyInput(balance).code)) {
            this.vendingMachine.addUserBalance(balance);
            this.dataPersister.setData('userBalance',this.vendingMachine.getUserBalance());
        }
    }
    
    requestPurchaseProduct = (idx) => {
        const productPrice = this.vendingMachine.getProduct(idx).price;
        const userBalance = this.vendingMachine.getUserBalanceQuantity();
        if (this.alertIfNotSuccess(validEnoughMoney(productPrice, userBalance).code)) {
            this.vendingMachine.purchaseProduct(idx);
            this.view.renderUserBalance(this.vendingMachine.getUserBalanceQuantity());
            this.view.renderPurchaseProductList(this.vendingMachine.getProducts());
            this.view.registerPurchaseButtonHandler(this.requestPurchaseProduct);
            this.dataPersister.setData('products',this.vendingMachine.getProducts());
            this.dataPersister.setData('machineCoins',this.vendingMachine.getMachineCoins());
            this.dataPersister.setData('userBalance',this.vendingMachine.getUserBalance());
        }
    }
    
    alertIfNotSuccess(result) {
        if (result !== VALID_CODE_MESSAGES.SUCCESS) {
            this.view.showAlert(result);
            return false;
        }
        return true;
    }
}