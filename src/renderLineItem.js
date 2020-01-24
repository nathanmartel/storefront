import { calcLineItem, findById } from './utils.js';

export const renderLineItem = (petOrder, lesserPets) => {
    const matchingPet = findById(petOrder.id, lesserPets);
    const newTr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = matchingPet.name;
    nameTd.classList.add('left');
    newTr.appendChild(nameTd);

    const qtyTd = document.createElement('td');
    qtyTd.textContent = petOrder.qty;
    newTr.appendChild(qtyTd);

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${matchingPet.price.toFixed(2)}`;
    newTr.appendChild(priceTd);

    const totalTd = document.createElement('td');
    const rawTotal = calcLineItem(matchingPet.price, petOrder.qty);
    totalTd.textContent = `$${rawTotal.toFixed(2)}`;
    newTr.appendChild(totalTd);

    return newTr;
};