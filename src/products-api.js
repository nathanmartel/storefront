import lesserPetsSeed from '../data/lesserPets.js';
const productsKey = 'lesserPets';
import { buildPetLi } from './buildPetLi.js';


export function addProduct(newProduct) {
    const lesserPets = getProducts();
    lesserPets.push(newProduct);
    saveProducts(lesserPets);
}


export function removeProduct(petId) {
    const petIdCallback = (element) => element.id === petId;
    const lesserPets = getProducts();
    const petIdSplice = lesserPets.findIndex(petIdCallback);
    lesserPets.splice(petIdSplice, 1);
    saveProducts(lesserPets);
    showAllProductsForRemoval();
    
}


export function getProducts() {
    const myProductsTest = localStorage.getItem(productsKey);

    if (!myProductsTest || myProductsTest === '[]') {
        const lesserPetsSeedString = JSON.stringify(lesserPetsSeed);
        localStorage.setItem(productsKey, lesserPetsSeedString);
    }

    const myProductsString = localStorage.getItem(productsKey);
    const myProducts = JSON.parse(myProductsString);
    return myProducts;
}


function saveProducts(lesserPets) {
    const lesserPetsString = JSON.stringify(lesserPets);
    localStorage.setItem(productsKey, lesserPetsString);
}


export function showNewProduct(newProduct) {
    const newProductDiv = document.getElementById('new-product-gallery');
    const petUl = document.getElementById('new-content');

    if (newProductDiv.classList.contains('hidden')) {
        newProductDiv.classList.remove('hidden');
    }

    let petLi = buildPetLi(newProduct);
    petLi = convertAddToRemoveButton(petLi);
    petUl.appendChild(petLi);
}


function convertAddToRemoveButton(petLi) {
    const removeId = petLi.querySelector('button').value;
    petLi.querySelector('button').textContent = 'Remove';
    petLi.querySelector('button').removeEventListener;
    petLi.querySelector('button').addEventListener('click', () => removeProduct(removeId));
    return petLi;
}


export function showAllProductsForRemoval() {
    const lesserPets = getProducts();
    const petUl = document.getElementById('store-content');

    // Clear HTML before rendering products
    petUl.innerHTML = '';

    lesserPets.forEach((singlePet) => {
        let petLi = buildPetLi(singlePet);
        petLi = convertAddToRemoveButton(petLi);
        petUl.appendChild(petLi);
    });   
}