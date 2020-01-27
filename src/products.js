import { getProducts } from './products-api.js';
import { buildPetLi } from './buildPetLi.js';

// Run on load
const petUl = document.getElementById('store-content');

const lesserPets = getProducts();

lesserPets.forEach((singlePet) => {
    const petLi = buildPetLi(singlePet);
    petUl.appendChild(petLi);
});
