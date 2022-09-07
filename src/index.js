import { VendingMachineHandler } from "./vendingMachineHandler.js";
import { Product } from "./models/product.js";
import { Coin } from "./models/coin.js";
import { VendingMachineDataStore } from "./persisters/vendingMachineDataStore.js";
import { LocalDataPersister } from "./persisters/localDataPersister.js";

const isDevelop = false;

const vendingMachineDataStore = new VendingMachineDataStore(new LocalDataPersister());

const mockData = {
    products: [
        new Product({ name: '콜라', price: 1200, quantity: 20 }),
        new Product({ name: '환타', price: 1000, quantity: 10 }),
    ],
    machineCoins: [
        new Coin({value:500,currency:'원',quantity:5}),
        new Coin({value:100,currency:'원',quantity:4}),
        new Coin({value:50,currency:'원',quantity:3}),
        new Coin({value:10,currency:'원',quantity:2}),
    ],
    userBalance:{
        quantity:3000,
        currency:'원'
    }
}

const deployData = vendingMachineDataStore.getVendingMachineData();

const initialData = isDevelop ? mockData : deployData;
const vendingMachine = new VendingMachineHandler(initialData,vendingMachineDataStore);

