import { lesserPets } from '../data/lesserPets.js';
import { petsInCart } from '../data/cart.js';
import { renderLineItem } from './renderLineItem.js';
import { calcOrderTotal } from './utils.js';

const cart = document.getElementById('cart-body');
const cartTotal = document.getElementById('cart-total');

petsInCart.forEach((thisPet) => {
    const newRow = renderLineItem(thisPet, lesserPets);
    cart.appendChild(newRow);
});

let rawOrderTotal = calcOrderTotal(petsInCart, lesserPets);
rawOrderTotal = Math.round(rawOrderTotal * 100) / 100;
cartTotal.textContent = `$${rawOrderTotal.toFixed(2)}`;