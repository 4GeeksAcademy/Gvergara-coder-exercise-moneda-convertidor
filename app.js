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

const fromYenToPound = function(valueInPound){
    let valueInEuro = valueInPound / 0.87;
    let valueInYens = valueInEuro * 156.5
    return Math.floor(valueInYens)
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }