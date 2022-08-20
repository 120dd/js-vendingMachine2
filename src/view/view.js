import { $ } from '../utils/utils.js';
import { SELECTOR, TEMPLATES } from './viewConstans.js';

export class View {
	constructor() {
		this.renderHeader();
		this.registerProductTabButtonClicked();
		this.registerMachineTabClicked();
		this.registerPurchaseTabButtonClicked();
		this.createContentsArea();
	}

	renderHeader() {
		const $header = document.createElement('header');
		$header.innerHTML = TEMPLATES.HEADER;
		$(SELECTOR.APP).appendChild($header);
	}

	createContentsArea() {
		const $contentsArea = document.createElement('div');
		$contentsArea.setAttribute('id', 'contents-area');
		$(SELECTOR.APP).appendChild($contentsArea);
	}

	registerProductTabButtonClicked() {
		$(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
			this.renderProductTab();
		});
	}

	registerMachineTabClicked() {
		$(SELECTOR.COIN_MENU).addEventListener('click', () => {
			this.renderMachineTab();
		});
	}

	registerPurchaseTabButtonClicked() {
		$(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
			this.renderPurchaseTab();
		});
	}

	renderProductTab() {
		const $productTab = document.createElement('div');
		$productTab.innerHTML = TEMPLATES.PRODUCT_MENU;
		this.clearContentsArea();
		$(SELECTOR.CONTENTS_AREA).appendChild($productTab);
	}

	renderMachineTab() {
		const $machineTab = document.createElement('div');
		$machineTab.innerHTML = TEMPLATES.MACHINE_MENU;
		this.clearContentsArea();
		$(SELECTOR.CONTENTS_AREA).appendChild($machineTab);
	}

	renderPurchaseTab() {
		const $purchaseTab = document.createElement('div');
		$purchaseTab.innerHTML = TEMPLATES.PURCHASE_MENU;
		this.clearContentsArea();
		$(SELECTOR.CONTENTS_AREA).appendChild($purchaseTab);
	}

	clearContentsArea() {
		if ($(SELECTOR.CONTENTS_AREA).hasChildNodes()) {
			$(SELECTOR.CONTENTS_AREA).firstChild.remove();
		}
	}
}
