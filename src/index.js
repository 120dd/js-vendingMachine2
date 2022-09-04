import { VendingMachineHandler } from "./vendingMachineHandler.js";
import { Product } from "./models/product.js";
import { Coin } from "./models/coin.js";
import { LocalDataPersister } from "./localDataPersister.js";
import {
    convertListToCoinsObj,
    convertListToProductObj,
    convertListToUserBalanceObj
} from "./utils/utils.js";

const isDevelop = false;

const dataPersister = new LocalDataPersister();

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

const productData = dataPersister.getData('products');
const machineCoinsData = dataPersister.getData('machineCoins');
const userBalanceData = dataPersister.getData('userBalance');

const deployData = {
    products: convertListToProductObj(productData),
    machineCoins: convertListToCoinsObj(machineCoinsData),
    userBalance:convertListToUserBalanceObj(userBalanceData)
}

const initialData = isDevelop ? mockData : deployData;
const vendingMachine = new VendingMachineHandler(initialData);

