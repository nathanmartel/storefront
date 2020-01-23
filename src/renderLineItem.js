import { calcLineItem } from "./utils";

export const renderLineItem = (pet) => {
    const newTr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = pet.name;
    newTr.appendChild(nameTd);

    const qtyTd = document.createElement('td');
    qtyTd.textContent = pet.qty;
    newTr.appendChild(qtyTd);

    const priceTd = document.createElement('td');
    // priceTd.textContent = pet.name;
    newTr.appendChild(priceTd);

    const totalTd = document.createElement('td');
    // total.textContent = calcLineItem(amount, quantity);
    newTr.appendChild(totalTd);

    return newTr;
};