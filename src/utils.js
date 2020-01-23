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

const calcOrderTotal = (fullOrder, lesserPets) => {
    let orderTotal = 0;
    fullOrder.forEach((thisOrder) => {
        const matchingPet = findById(thisOrder.id, lesserPets);
        orderTotal += calcLineItem(matchingPet.price, thisOrder.qty);
    });
    return orderTotal;
};

export { findById, calcLineItem, calcOrderTotal };


