export class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    static factory(name, price, quantity) {
        return new Product(name, price, quantity)
    }
}