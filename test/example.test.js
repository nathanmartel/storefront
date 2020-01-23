import { lesserPets } from '../data/lesserPets.js';
import { buildPetLi } from '../src/builtPetLi.js';
import { findById } from '../src/utils.js';
import { calcLineItem } from '../src/utils.js';

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
