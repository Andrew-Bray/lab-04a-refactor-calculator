// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { subtract } from '../mathutils.js';

const test = QUnit.test;

test('subtract should take 10 and 3 and return 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 10;
    const argument2 = 3;
    const expected = 7
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(argument1, argument2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
