// Import functions
import { buildPetLi } from '../src/buildPetLi.js';
import { findById, calcLineItem, calcOrderTotal } from '../src/utils.js';
import { renderLineItem } from '../src/renderLineItem.js';
import { addProduct, getProducts } from '../src/products-api.js';

const test = QUnit.test;

test('Does dynamic pet match static pet?', function(assert) {
    const lesserPets = getProducts();
    const actualResult = buildPetLi(lesserPets[0]).outerHTML;
    const expectedResult = `<li class="pet-listing"><div class="image-container"><img src="../assets/goldfish.jpg" alt="A Goldfish photo"></div><div class="text-container"><h3>Goldfish</h3><p class="description">One of the most commonly kept aquarium fish.</p><p class="category">Fish</p><p class="price">$1.00</p><button value="goldfish">Add</button></div></li>`;

    assert.equal(expectedResult, actualResult);
});

test('Does findbyId return goldfish?', function(assert) {
    const lesserPets = getProducts();
    const actualResult = findById('goldfish', lesserPets);
    const expectedResult = lesserPets[0];
    assert.equal(expectedResult, actualResult);
});

test('Does findbyId return gecko? ', function(assert) {
    const lesserPets = getProducts();
    const actualResult = findById('gecko', lesserPets);
    const expectedResult = lesserPets[6];
    assert.equal(expectedResult, actualResult);
});

test('Does calcLineItem multiply properly? ', function(assert) {
    const actualResult = calcLineItem(7, 5);
    const expectedResult = 35;
    assert.equal(expectedResult, actualResult);
});

test('Does calcLineItem multiply properly if negative? ', function(assert) {
    const actualResult = calcLineItem(-3, 3);
    const expectedResult = -9;
    assert.equal(expectedResult, actualResult);
});

test('Does calcLineItem round properly if a long result is produced? ', function(assert) {
    const actualResult = calcLineItem(5.123, 3.987);
    const expectedResult = 20.43;
    assert.equal(expectedResult, actualResult);
});

test('Does renderLineItem output properly? ', function(assert) {
    const lesserPets = getProducts();
    const myOrder = { id : 'goldfish', qty: 3 };
    const actualResult = renderLineItem(myOrder, lesserPets).outerHTML;
    const expectedResult = `<tr><td class="left">Goldfish</td><td>3</td><td>$1.00</td><td>$3.00</td></tr>`;
    assert.equal(expectedResult, actualResult);
});

test('Does calcOrderTotal add up properly? ', function(assert) {
    const lesserPets = getProducts();
    const myOrder = [{ 
        id : 'goldfish',
        qty : 3,
        // price in lesserPets is $1
    },
    {
        id : 'gecko',
        qty: 4,
        // price in lesserPets is $30
    }];
    const actualResult = calcOrderTotal(myOrder, lesserPets);
    const expectedResult = 123;
    assert.equal(expectedResult, actualResult);
});

test('Does calcOrderTotal add up properly with decimals? ', function(assert) {
    const lesserPets = getProducts();
    const myOrder = [{ 
        id : 'goldfish',
        qty : 3,
        // price in lesserPets is $1
    },
    {
        id : 'antFarm',
        qty: 1,
        // price in lesserPets is $28.50
    },
    {
        id : 'gecko',
        qty: 4,
        // price in lesserPets is $30
    }];
    const actualResult = calcOrderTotal(myOrder, lesserPets);
    const expectedResult = 150.5;
    assert.equal(expectedResult, actualResult);
});

test('Does addProduct match the last item in the products array?', function(assert) {
    const expectedResult = { 
        id : 'seaMonkeys',
        name : 'Sea Monkeys',
        image : 'seamonkeys.jpg',
        description : `See monkeys? No, sea monkeys!`,
        category : 'Crustacean',
        price : 1.25,
    };
    addProduct(expectedResult);
    const lesserPets = getProducts();
    const actualResult = lesserPets[lesserPets.length - 1];
    assert.deepEqual(actualResult, expectedResult);
});
