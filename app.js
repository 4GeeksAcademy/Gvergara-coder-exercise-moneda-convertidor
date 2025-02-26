const sum = function(a, b) {
    return a + b;
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return Math.floor(valueInYen);
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 156.5;
    let valueInPounds = valueInEuro * 0.87;
    return Math.floor(valueInPounds)
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }