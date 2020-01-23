const findById = (someId, someArray) => {
    return someArray.find((thisItem) => { 
        if (thisItem.id === someId) return thisItem;
    });
};

const calcLineItem = (amount, quantity) => amount * quantity;

export { findById, calcLineItem };