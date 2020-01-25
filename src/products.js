import { lesserPets } from '../data/lesserPets.js';
import { buildPetLi } from './buildPetLi.js';

// Run on load
const petUl = document.getElementById('store-content');

for (let i = 0; i < lesserPets.length; i++) {
    const singlePet = lesserPets[i];
    const petLi = buildPetLi(singlePet);
    petUl.appendChild(petLi);
}
