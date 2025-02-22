const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14 , 9);
    expect(total).toBe(23);
}) 

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87 // british pound
}

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)


})

test("One Dollar should be 146 Yen", function() {

    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(1);

    const expected = Math.floor(1 / 1.07 * 156.5);
    
     expect(yens).toBe(expected); 


})

test("One Yen should be 180 Pound", function() {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(1);

    const expected = Math.floor(1 / 0.87 * 156.5);
    
     expect(pound).toBe(expected); 


})