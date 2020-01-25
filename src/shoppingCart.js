import { clearCart, purchaseCart, renderCart } from './cart-api.js';

// Get DOM
const buyButton = document.getElementById('place-order-button');
const clearCartButton = document.getElementById('empty-cart-button');    

// Add event listeners
buyButton.addEventListener('click', purchaseCart);
clearCartButton.addEventListener('click', clearCart);

// Run on load
renderCart();
