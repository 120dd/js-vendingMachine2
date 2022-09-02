export class Coin {
    #currency;
    
    #quantity;
    
    #value;
    
    constructor({ currency, quantity, value }) {
        this.#quantity = quantity;
        this.#value = value
        this.#currency = currency;
    }
    
    getValue = () => this.#value;
    
    getQuantity =() => this.#quantity;
    
    changeQuantity = (quantity) => {
        this.#quantity += quantity;
        return this.#quantity;
    }
    
    setQuantity = (newQuantity) => {
        this.#quantity = newQuantity;
    }
}