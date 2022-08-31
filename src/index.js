import { VendingMachineHandler } from "./vendingMachineHandler.js";
import { Product } from "./models/product.js";

const isDevelop = true

const mockData = {
    products: [
        new Product({ name: '콜라', price: 1200, quantity: 20 }),
        new Product({ name: '환타', price: 1000, quantity: 10 }),
    ],
    machineCoins: {
        coinQuantity500:5,
        coinQuantity100:4,
        coinQuantity50:3,
        coinQuantity10:2,
    },
    userBalance:{
        quantity:3000,
        currency:'원'
    }
}

const deployData = {
    products: [],
    machineCoins: {
        coinQuantity500:0,
        coinQuantity100:0,
        coinQuantity50:0,
        coinQuantity10:0,
    },
    userBalance:{
        quantity:0,
        currency:'원'
    }
}

const initialData = isDevelop ? mockData : deployData;
const vendingMachine = new VendingMachineHandler(initialData);

