import { $ } from '../utils/utils.js';
import { SELECTOR, TEMPLATES } from './viewConstans.js';

export class View {
    constructor() {
        this.$header = this.createElement('header', TEMPLATES.HEADER);
        this.$tabArea = this.createElement('div', '');
        this.$productTab = this.createElement('div', TEMPLATES.PRODUCT_MENU);
        this.$machineTab = this.createElement('div', TEMPLATES.MACHINE_MENU);
        this.$purchaseTab = this.createElement('div', TEMPLATES.PURCHASE_MENU);
        
        this.initUi();
        this.initHandlers();
    }
    
    initUi() {
        // header
        $(SELECTOR.APP).appendChild(this.$header);
        
        // tab area
        this.createTabArea();
        this.$tabArea.setAttribute('id', 'contents-area');
        $(SELECTOR.APP).appendChild(this.$tabArea);
    }
    
    initHandlers() {
        $(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
            this.renderTab(this.$productTab);
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
        this.$tabArea.setAttribute('id', 'contents-area');
        $(SELECTOR.APP).appendChild(this.$tabArea);
    }
    
    clearTabArea() {
        if ($(SELECTOR.TAB_AREA).hasChildNodes()) {
            $(SELECTOR.TAB_AREA).firstChild.remove();
        }
    }
}
