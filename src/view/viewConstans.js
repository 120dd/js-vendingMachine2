export const SELECTOR = Object.freeze({
    APP: '#app',
    PAGE_AREA: '#page-area',
    TAB_AREA: '#tab-area',
    COIN_MENU: '#vending-machine-manage-menu',
    PRODUCT_MENU: '#product-add-menu',
    PURCHASE_MENU: '#product-purchase-menu',
    COIN_CHARGE_INPUT: '#vending-machine-charge-input',
    COIN_CHARGE_BUTTON: '#vending-machine-charge-button',
    COIN_500: '#vending-machine-coin-500-quantity',
    COIN_100: '#vending-machine-coin-100-quantity',
    COIN_50: '#vending-machine-coin-50-quantity',
    COIN_10: '#vending-machine-coin-10-quantity',
    PRODUCT_TABLE: '#added-product-table',
    PRODUCT_NAME_INPUT: '#product-name-input',
    PRODUCT_PRICE_INPUT: '#product-price-input',
    PRODUCT_QUANTITY_INPUT: '#product-quantity-input',
    PRODUCT_ADD_BUTTON: '#product-add-button',
    PURCHASE_CHARGE_INPUT: '#charge-input',
    PURCHASE_CHARGE_AMOUNT: '#charge-amount',
    PURCHASE_CHARGE_BUTTON: '#charge-button',
    PURCHASE_MENU_TABLE: '#purchase-product-table',
    PURCHASE_ITEM_BUTTON: '.purchase-button',
    PURCHASE_ITEM_QUANTITY: '.product-purchase-quantity',
    RETURN_COIN_BUTTON: '#coin-return-button',
    RETURN_500: '#coin-500-quantity',
    RETURN_100: '#coin-100-quantity',
    RETURN_50: '#coin-50-quantity',
    RETURN_10: '#coin-10-quantity',
});

export const templates = {
    title: `
        <h1>자판기</h1>
    `,
    menu: `
        <div>
            <button id ="product-add-menu">상품 관리</button>
            <button id ="vending-machine-manage-menu">잔돈 충전</button>
            <button id ="product-purchase-menu">상품 구매</button>
        </div>
    `,
    pageArea: `
        <div id="page-area"></div>
    `,
    addProductForm: `
        <div>
            <h2>상품 추가하기</h2>
            <input id="product-name-input" type="text" placeholder="상품명">
            <input id="product-price-input" type="number" placeholder="가격">
            <input id="product-quantity-input" type="number" placeholder="수량">
            <button id="product-add-button">추가하기</button>
        </div>
    `,
    addedProductList: `
        <div>
            <h2>상품 현황</h2>
	        <table id="added-product-table" border="1">
		        <tr id="productTableHeader">
			        <th>상품명</th>
			        <th>가격</th>
			        <th>수량</th>
		        </tr>
	        </table>
        </div>
    `,
    newProductList: `
        <table id="added-product-table" border="1">
		        <tr id="productTableHeader">
			        <th>상품명</th>
			        <th>가격</th>
			        <th>수량</th>
		        </tr>
	        </table>
        `,
    productListItem: (product) => `
            <tr class="product-list-item">
                <td class="product-manage-name">${product.name}</td>
                <td class="product-manage-price">${product.price}</td>
                <td class="product-manage-quantity">${product.quantity}</td>
            </tr>
        `,
    chargeCoinForm: `
    	<h3>자판기 동전 충전하기</h3>
	    <input type="number" id="vending-machine-charge-input">
	    <button id="vending-machine-charge-button">충전하기</button>
    `,
    chargedCoinList: `
    <h3>동전 보유 현황</h3>
	<table border="1" id="vending-machine-charge-amount">
    	<tr>
        	<th>동전</th>
        	<th>개수</th>
    	</tr>
    	<tr>
        	<th>500원</th>
        	<th id="vending-machine-coin-500-quantity"></th>
    	</tr>
    	<tr>
        	<th>100원</th>
        	<th id="vending-machine-coin-100-quantity"></th>
    	</tr>
    	<tr>
        	<th>50원</th>
        	<th id="vending-machine-coin-50-quantity"></th>
    	</tr>
    	<tr>
        	<th>10원</th>
        	<th id="vending-machine-coin-10-quantity"></th>
    	</tr>
	</table>
    `,
    chargeUserBalance: `
    <div>
        <h3>금액 투입</h3>
	    <input type="number" id="charge-input">
	    <button id="charge-button">투입하기</button>
	    <p>투입한 금액: <span id="charge-amount"></span>원</p>
    </div>
    `,
    purchaseItemList: `
    <div>
        <h3>구매할 수 있는 상품 현황</h3>
        <table id="purchase-product-table" border="1">
        <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
        </tr>
        </table>
    </div>
    `,
    returnedCoinList: `
    <div>
    	<h3>잔돈</h3>
	    <button id="coin-return-button">반환하기</button>
	    <table border="1">
	        <tr>
	            <th>동전</th>
	            <th>개수</th>
            </tr>
            <tr>
                <th>500원</th>
                <th id="coin-500-quantity"></th>
            </tr>
            <tr>
                <th>100원</th>
                <th id="coin-100-quantity"></th>
            </tr>
            <tr>
                <th>50원</th>
                <th id="coin-50-quantity"></th>
            </tr>
            <tr>
                <th>10원</th>
                <th id="coin-10-quantity"></th>
            </tr>
        </table>
    </div>
    `,
    userBalance: (balance) => `${balance}`,
    purchaseProductItem: (product) => `
            <tr class="product-purchase-item">
                <td class="product-purchase-name" data-product-name=${product.name}>${product.name}</td>
                <td class="product-purchase-price" data-product-price=${product.price}>${product.price}</td>
                <td class="product-purchase-quantity" data-product-quantity=${product.quantity}>${product.quantity}</td>
                <td>
                <input type="button" class="purchase-button" value="구매하기"/>
                </td>
            </tr>
    `
}
