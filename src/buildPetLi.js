import { findById } from './utils.js';

export function buildPetLi(thisPet) {
    const petLi = document.createElement('li');
    petLi.classList.add('pet-listing');

    const petLiImgDiv = document.createElement('div');
    petLiImgDiv.classList.add('image-container');
    const petLiImg = document.createElement('img');
    petLiImg.src = '../assets/' + thisPet.image;
    petLiImg.alt = `A ${thisPet.name} photo`;
    petLiImgDiv.appendChild(petLiImg);
    petLi.appendChild(petLiImgDiv);

    const petLiDiv = document.createElement('div');
    petLiDiv.classList.add('text-container');
    
    const petLiName = document.createElement('h3');
    petLiName.textContent = thisPet.name;
    petLiDiv.appendChild(petLiName);
    
    const petLiDescription = document.createElement('p');
    petLiDescription.classList.add('description');
    petLiDescription.textContent = thisPet.description;
    petLiDiv.appendChild(petLiDescription);

    const petLiCategory = document.createElement('p');
    petLiCategory.classList.add('category');
    petLiCategory.textContent = thisPet.category;
    petLiDiv.appendChild(petLiCategory);

    const petLiPrice = document.createElement('p');
    petLiPrice.classList.add('price');
    petLiPrice.textContent = `$${thisPet.price.toFixed(2)}`;
    petLiDiv.appendChild(petLiPrice);

    const petLiButton = document.createElement('button');
    petLiButton.value = thisPet.id;
    petLiButton.textContent = 'Add';
    petLiButton.addEventListener('click', () => {

        const petId = thisPet.id;
        console.log(`Adding ${petId} to cart`);
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
    });
    
    petLiDiv.appendChild(petLiButton);

    petLi.appendChild(petLiDiv);

    return petLi;
}

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

export function saveCart(myCart) {
    const myCartString = JSON.stringify(myCart);
    localStorage.setItem('cart', myCartString);
    console.log(localStorage);
}