import { VendingMachineHandler } from "./vendingMachineHandler.js";
import { Product } from "./models/product.js";

const isDevelop = true

const mockData = {
    products: [
        new Product({ name: '콜라', price: 1200, quantity: 20 }),
        new Product({ name: '환타', price: 1000, quantity: 10 }),
    ],
}

const deployData = {
    products: []
}

const initialData = isDevelop ? mockData : deployData;
const vendingMachine = new VendingMachineHandler(initialData);

