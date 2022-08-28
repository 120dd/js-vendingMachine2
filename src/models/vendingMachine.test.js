import { VendingMachine } from "./vendingMachine";

const testVendingMachine = new VendingMachine();

test('setUserBalance to 30 equal 30', () => {
    testVendingMachine.setUserBalance(30);
    expect(testVendingMachine.userBalance).toEqual(30);
    testVendingMachine.setUserBalance(20);
    expect(testVendingMachine.userBalance).not.toEqual(30);
})