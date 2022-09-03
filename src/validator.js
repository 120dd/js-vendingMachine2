export const validMoney = (balance) => {
    if (Number.isNaN(balance)){
        return {code:'NO_BALANCE'};
    }
    if (balance%10 !== 0){
        return {code:'BALANCE_SHOULD_MULTIPLE_OF TEN'};
    }
    if (balance<10){
        return {code:'BALANCE_SHOULD_MORE_THEN_10'};
    }
    if (typeof balance !== 'number'){
        return {code:'BALANCE_SHOULD_BE_NUMBER_TYPE'};
    }
    return {code:'SUCCESS'};
}

export const validQuantity = (quantity) => {
    if (Number.isNaN(quantity)){
        return {code:'NO_QUANTITY'};
    }
    if (quantity<1){
        return {code:'QUANTITY_SHOULD_MORE_THEN_ONE'};
    }
    return {code:'SUCCESS'};
}

export const validName = (name) => {
    if (name.trim() === ''){
        return {code:'NO_NAME'};
    }
    return {code:'SUCCESS'};
}

export const validEnoughMoney = (price,userBalance) => {
    if (price > userBalance){
        return {code:'NOT_ENOUGH_MONEY'};
    }
    return {code:'SUCCESS'};
}