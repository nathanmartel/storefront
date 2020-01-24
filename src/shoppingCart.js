import { lesserPets } from '../data/lesserPets.js';
import { renderLineItem } from './renderLineItem.js';
import { calcOrderTotal } from './utils.js';
import { fetchCart } from './buildPetLi.js';

const buttonContainer = document.querySelector('.button-container');
const buyButton = document.getElementById('place-order-button');
const emptyCartButton = document.getElementById('empty-cart-button');    

// Add event listeners
buyButton.addEventListener('click', purchaseAlert);
emptyCartButton.addEventListener('click', emptyCart);
window.addEventListener('storage', () => console.log('Storage change!'));

// Misc. functions
function renderCart() {
    const cart = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    const petsInCart = fetchCart();
    
    // Clear HTML before rendering cart
    cart.innerHTML = '';

    petsInCart.forEach((thisPet) => {
        const newRow = renderLineItem(thisPet, lesserPets);
        cart.appendChild(newRow);
    });

    let rawOrderTotal = calcOrderTotal(petsInCart, lesserPets);
    rawOrderTotal = Math.round(rawOrderTotal * 100) / 100;
    cartTotal.textContent = `$${rawOrderTotal.toFixed(2)}`;

    buttonContainer.style.display = 'flex';

    if (petsInCart.length === 0) { buttonContainer.style.display = 'none'; }    
}

function emptyCart() {
    localStorage.removeItem('cart');
    renderCart();
}

function purchaseAlert() {
    const myCart = fetchCart();
    alert(JSON.stringify(myCart, true, 2));
    emptyCart();
    window.location.href = "/";
}


// Run on load
renderCart();
