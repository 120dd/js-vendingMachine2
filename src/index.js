import { VendingMachineHandler } from "./vendingMachineHandler.js";
import { Product } from "./models/product.js";

const isDevelop = false

const mockData = {
    products: [
        new Product({ name: '콜라', price: 1200, quantity: 20 }),
        new Product({ name: '환타', price: 1000, quantity: 10 }),
    ],
}

isDevelop ? new VendingMachineHandler(mockData) : new VendingMachineHandler();
