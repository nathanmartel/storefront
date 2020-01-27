import { addProduct, showNewProduct, showAllProductsForRemoval } from './products-api.js';

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


// Run on load
showAllProductsForRemoval();