const findById = (someId, someArray) => {
    return someArray.find((thisItem) => { 
        if (thisItem.id === someId) return thisItem;
    });
};

const calcLineItem = (price, quantity) => {
    let sum = price * quantity;
    sum = Math.round(sum * 100) / 100;
    return sum;
};

export { findById, calcLineItem };