import { $ } from '../utils/utils.js';
import { SELECTOR } from '../constans/constans.js';
import { TEMPLATES } from './templates.js';

export class View {
	constructor() {
		this.init();
	}

	init() {
		this.renderHeader();
		this.createContentsArea();
	}

	renderHeader() {
		const $header = document.createElement('header');
		$header.innerHTML = TEMPLATES.HEADER;
		$(SELECTOR.APP).appendChild($header);
		this.registerTabClicked();
	}

	createContentsArea() {
		const $contentsArea = document.createElement('div');
		$contentsArea.setAttribute('id', 'contents-area');
		$(SELECTOR.APP).appendChild($contentsArea);
	}

	registerTabClicked() {
		this.onProductTabButtonClicked();
		this.onMachineTabClicked();
		this.onPurchaseTabButtonClicked();
	}

	onProductTabButtonClicked() {
		$(SELECTOR.PRODUCT_MENU).addEventListener('click', () => {
			this.renderProductTab();
		});
	}

	onMachineTabClicked() {
		$(SELECTOR.COIN_MENU).addEventListener('click', () => {
			this.renderMachineTab();
		});
	}

	onPurchaseTabButtonClicked() {
		$(SELECTOR.PURCHASE_MENU).addEventListener('click', () => {
			console.log(33);
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

	clearContentsArea() {
		if ($(SELECTOR.CONTENTS_AREA).hasChildNodes()) {
			$(SELECTOR.CONTENTS_AREA).firstChild.remove();
		}
	}
}
