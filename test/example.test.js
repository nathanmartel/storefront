// IMPORT MODULES under test here:
import lesserPets from '../src/lesser-pets.js';
import buildPetLi from '../src/products.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    const actualResultTemp = buildPetLi(lesserPets[0]);
    const actualResult = actualResultTemp.outerHTML;
    const expectedResult = `<li class="pet-listing"><div class="image-container"><img src="../assets/goldfish.jpg" alt="A Goldfish photo"></div><div class="text-container"><h3>Goldfish</h3><p class="description">One of the most commonly kept aquarium fish.</p><p class="category">Fish</p><p class="price">$5.00</p><button value="goldfish">Add</button></div></li>`;


    assert.equal(expectedResult, actualResult);
});
