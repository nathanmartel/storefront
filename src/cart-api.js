import { findById, calcOrderTotal } from './utils.js';
import { renderLineItem } from './renderLineItem.js';
import { getProducts } from './products-api.js';

export function getCart() {
    const myCart = localStorage.getItem('cart');
    console.log('Cart contains:', myCart);  
    if (!myCart) {
        const myEmptyCart = [];
        return myEmptyCart;
    } else {
        const myCartWithStuff = JSON.parse(myCart);
        return myCartWithStuff;
    }
}

export function addToCart(petId) {
    const myCart = getCart();
    const myNewOrder = findById(petId, myCart);
    if (myNewOrder) {
        myNewOrder.qty += 1;
        saveCart(myCart);
    } else {
        const newPetInCart = {
            id : petId,
            qty : 1
        };
        myCart.push(newPetInCart);
        saveCart(myCart);
    }
}    

export function saveCart(myCart) {
    const myCartString = JSON.stringify(myCart);
    localStorage.setItem('cart', myCartString);
    console.log(localStorage);
}

export function clearCart() {
    localStorage.removeItem('cart');
    renderCart();
}

export function purchaseCart() {
    const myCart = getCart();
    alert(JSON.stringify(myCart, true, 2));
    clearCart();
    window.location.href = '/';
}

export function renderCart() {
    const cart = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    const buttonContainer = document.querySelector('.button-container');
    const lesserPets = getProducts();
    const petsInCart = getCart();
    
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