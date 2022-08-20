import { $ } from '../utils/utils.js';
import { SELECTOR, TEMPLATES } from './viewConstans.js';

export class View {
	constructor() {
		this.$header = this.createElement('header', TEMPLATES.HEADER);
		this.$contentsArea = this.createElement('div', '');
		this.$productTab = this.createElement('div', TEMPLATES.PRODUCT_MENU);
		this.$machineTab = this.createElement('div', TEMPLATES.MACHINE_MENU);
		this.$purchaseTab = this.createElement('div', TEMPLATES.PURCHASE_MENU);
		this.renderHeader();
		this.registerProductTabButtonClicked();
		this.registerMachineTabClicked();
		this.registerPurchaseTabButtonClicked();
		this.createContentsArea();
	}

	renderHeader() {
		$(SELECTOR.APP).appendChild(this.$header);
	}

	createElement(tagName, innerHtml) {
		const newElement = document.createElement(tagName);
		newElement.innerHTML = innerHtml;
		return newElement;
	}

	createContentsArea() {
		this.$contentsArea.setAttribute('id', 'contents-area');
		$(SELECTOR.APP).appendChild(this.$contentsArea);
	}

	registerProductTabButtonClicked() {
		$(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
			this.renderTab(this.$productTab);
		});
	}

	registerMachineTabClicked() {
		$(SELECTOR.COIN_MENU).addEventListener('click', () => {
			this.renderTab(this.$machineTab);
		});
	}

	registerPurchaseTabButtonClicked() {
		$(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
			this.renderTab(this.$purchaseTab);
		});
	}

	renderTab(tab) {
		this.clearContentsArea();
		$(SELECTOR.CONTENTS_AREA).appendChild(tab);
	}

	clearContentsArea() {
		if ($(SELECTOR.CONTENTS_AREA).hasChildNodes()) {
			$(SELECTOR.CONTENTS_AREA).firstChild.remove();
		}
	}
}
