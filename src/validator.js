import { VALID_CODE_MESSAGES } from "./constans/validConstans.js";

export const validMoneyInput = (balance) => {
    if (Number.isNaN(balance)){
        return {code:VALID_CODE_MESSAGES.NO_BALANCE};
    }
    if (balance%10 !== 0){
        return {code:VALID_CODE_MESSAGES.BALANCE_SHOULD_MULTIPLE_OF_TEN};
    }
    if (balance<10){
        return {code:VALID_CODE_MESSAGES.BALANCE_SHOULD_MORE_THEN_TEN};
    }
    if (typeof balance !== 'number'){
        return {code:VALID_CODE_MESSAGES.BALANCE_SHOULD_BE_NUMBER_TYPE};
    }
    return {code:VALID_CODE_MESSAGES.SUCCESS};
}

export const validQuantityInput = (quantity) => {
    if (Number.isNaN(quantity)){
        return {code:VALID_CODE_MESSAGES.NO_QUANTITY};
    }
    if (quantity<1){
        return {code:VALID_CODE_MESSAGES.QUANTITY_SHOULD_MORE_THEN_ONE};
    }
    return {code:VALID_CODE_MESSAGES.SUCCESS};
}

export const validNameInput = (name) => {
    if (name.trim() === ''){
        return {code:VALID_CODE_MESSAGES.NO_NAME};
    }
    return {code:VALID_CODE_MESSAGES.SUCCESS};
}

export const validEnoughMoney = (price,userBalance) => {
    if (price > userBalance){
        return {code:VALID_CODE_MESSAGES.NOT_ENOUGH_MONEY};
    }
    return {code:VALID_CODE_MESSAGES.SUCCESS};
}