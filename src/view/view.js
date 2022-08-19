import { $ } from '../utils/utils.js';
import { SELECTOR } from '../constans/constans.js';
import { TEMPLATES } from './templates.js';

export class View {
    constructor() {
        this.init();
    }
    
    init() {
        this.renderHeader();
    }
    
    renderHeader() {
        const $header = document.createElement('header');
        $header.innerHTML = TEMPLATES.HEADER;
        $(SELECTOR.APP).appendChild($header);
        this.registerTabHandlers();
    }
    
    registerTabHandlers() {
        this.productTabButtonHandler();
        this.machineTabButtonHandler();
        this.purchaseTabButtonHandler();
    }
    
    productTabButtonHandler() {
        $(SELECTOR.PRODUCT_MENU).addEventListener('click' , () => {
            console.log(11);
        });
    }
    
    machineTabButtonHandler() {
        $(SELECTOR.COIN_MENU).addEventListener('click' , () => {
            console.log(22);
        });
    }
    
    purchaseTabButtonHandler() {
        $(SELECTOR.PURCHASE_MENU).addEventListener('click' , () => {
            console.log(33);
        });
    }
}
