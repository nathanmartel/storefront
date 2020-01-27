import { addProduct } from './cart-api.js';
import { buildPetLi } from './buildPetLi.js';

const newProductForm = document.getElementById('product-entry-form');

newProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(newProductForm);
    const myNewPet = {};
    myNewPet.id = formData.get('id');
    myNewPet.name = formData.get('name');
    myNewPet.image = formData.get('image');
    myNewPet.description = formData.get('description');
    myNewPet.category = formData.get('category');
    myNewPet.price = Number(formData.get('price'));
    
    addProduct(myNewPet);

    showNewProduct(myNewPet);

});

function showNewProduct(myNewPet) {
    const newProductDiv = document.getElementById('new-product-gallery');
    const petUl = document.getElementById('store-content');

    if (newProductDiv.classList.contains('hidden')) {
        newProductDiv.classList.remove('hidden');
    }

    const petLi = buildPetLi(myNewPet);
    petUl.appendChild(petLi);
}
