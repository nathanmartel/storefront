import { lesserPets } from '../data/lesserPets.js';
import { petsInCart } from '../data/cart.js';
import { renderLineItem } from './renderLineItem.js';

const cart = document.getElementById('cart-body');

petsInCart.forEach((thisPet) => {
    const newRow = renderLineItem(thisPet, lesserPets);
    cart.appendChild(newRow);
});