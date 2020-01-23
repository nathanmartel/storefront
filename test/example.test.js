// Import data
import { lesserPets } from '../data/lesserPets.js';

// Import functions
import { buildPetLi } from '../src/builtPetLi.js';
import { findById } from '../src/utils.js';
import { calcLineItem } from '../src/utils.js';
import { calcOrderTotal } from '../src/utils.js';
import { renderLineItem } from '../src/renderLineItem.js';

const test = QUnit.test;

test('Does dynamic pet match static pet?', function(assert) {
    const actualResult = buildPetLi(lesserPets[0]).outerHTML;
    const expectedResult = `<li class="pet-listing"><div class="image-container"><img src="../assets/goldfish.jpg" alt="A Goldfish photo"></div><div class="text-container"><h3>Goldfish</h3><p class="description">One of the most commonly kept aquarium fish.</p><p class="category">Fish</p><p class="price">$5.00</p><button value="goldfish">Add</button></div></li>`;

    assert.equal(expectedResult, actualResult);
});

test('Does findbyId return goldfish?', function(assert) {
    const actualResult = findById('goldfish', lesserPets);
    const expectedResult = lesserPets[0];
    assert.equal(expectedResult, actualResult);
});

test('Does findbyId return gecko? ', function(assert) {
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
    const myOrder = { id : 'goldfish', qty: 3 };
    const actualResult = renderLineItem(myOrder, lesserPets).outerHTML;
    const expectedResult = `<tr><td class="left">Goldfish</td><td>3</td><td>$5.00</td><td>$15.00</td></tr>`;
    assert.equal(expectedResult, actualResult);
});

test('Does calcOrderTotal add up properly? ', function(assert) {
    const myOrder = [{ 
        id : 'goldfish',
        qty : 3,
        // price in lesserPets is $5
    },
    {
        id : 'hermitCrab',
        qty: 1,
        // price in lesserPets is $8
    },
    {
        id : 'gecko',
        qty: 4,
        // price in lesserPets is $45
    }];
    const actualResult = calcOrderTotal(myOrder, lesserPets);
    const expectedResult = 203;
    assert.equal(expectedResult, actualResult);
});

test('Does calcOrderTotal add up properly with decimals? ', function(assert) {
    const myOrder = [{ 
        id : 'goldfish',
        qty : 3,
        // price in lesserPets is $5
    },
    {
        id : 'antFarm',
        qty: 1,
        // price in lesserPets is $27.50
    },
    {
        id : 'gecko',
        qty: 4,
        // price in lesserPets is $45
    }];
    const actualResult = calcOrderTotal(myOrder, lesserPets);
    const expectedResult = 222.5;
    assert.equal(expectedResult, actualResult);
});
