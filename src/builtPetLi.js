export default function buildPetLi(thisPet) {
    const PetLi = document.createElement('li');
    PetLi.classList.add('pet-listing');

    const PetLiImgDiv = document.createElement('div');
    PetLiImgDiv.classList.add('image-container');
    const PetLiImg = document.createElement('img');
    PetLiImg.src = '../assets/' + thisPet.image;
    PetLiImg.alt = `A ${thisPet.name} photo`;
    PetLiImgDiv.appendChild(PetLiImg);
    PetLi.appendChild(PetLiImgDiv);

    const PetLiDiv = document.createElement('div');
    PetLiDiv.classList.add('text-container');
    
    const PetLiName = document.createElement('h3');
    PetLiName.textContent = thisPet.name;
    PetLiDiv.appendChild(PetLiName);
    
    const PetLiDescription = document.createElement('p');
    PetLiDescription.classList.add('description');
    PetLiDescription.textContent = thisPet.description;
    PetLiDiv.appendChild(PetLiDescription);

    const PetLiCategory = document.createElement('p');
    PetLiCategory.classList.add('category');
    PetLiCategory.textContent = thisPet.category;
    PetLiDiv.appendChild(PetLiCategory);

    const PetLiPrice = document.createElement('p');
    PetLiPrice.classList.add('price');
    PetLiPrice.textContent = `$${thisPet.price.toFixed(2)}`;
    PetLiDiv.appendChild(PetLiPrice);

    const PetLiButton = document.createElement('button');
    PetLiButton.value = thisPet.id;
    PetLiButton.textContent = 'Add';
    PetLiDiv.appendChild(PetLiButton);

    PetLi.appendChild(PetLiDiv);

    return PetLi;
}