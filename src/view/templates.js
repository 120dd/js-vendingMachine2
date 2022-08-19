export const TEMPLATES = {
	HEADER: `
	<h1>자판기</h1>
	<button id ="product-add-menu">상품 관리</button>
    <button id ="vending-machine-manage-menu">잔돈 충전</button>
    <button id ="product-purchase-menu">상품 구매</button>
	`,
	PRODUCT_MENU: `
	<h2>상품 추가하기</h2>
    <input id="product-name-input" type="text" placeholder="상품명">
    <input id="product-price-input" type="number" placeholder="가격">
    <input id="product-quantity-input" type="number" placeholder="수량">
    <button id="product-add-button">추가하기</button>
	<h2>상품 현황</h2>
	<table id="added-product-table" border="1">
		<tr id="productTableHeader">
			<th>상품명</th>
			<th>가격</th>
			<th>수량</th>
		</tr>
	</table>
	`,
	MACHINE_MENU: `
	<h3>자판기 동전 충전하기</h3>
	<input type="number" id="vending-machine-charge-input">
	<button id="vending-machine-charge-button">충전하기</button>
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
};
