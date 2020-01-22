import lesserPets from './lesser-pets.js';
import buildPetLi from './builtPetLi.js';

// Run on load
const PetUl = document.getElementById('store-content');

for (let i = 0; i < lesserPets.length; i++) {
    let singlePet = lesserPets[i];
    let PetLi = buildPetLi(singlePet);
    PetUl.appendChild(PetLi);
}

export { buildPetLi as default };