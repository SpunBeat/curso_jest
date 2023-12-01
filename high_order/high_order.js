const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const division = (a, b) => b === 0 ? undefined : a / b;
const multiplicacion = (a, b) => a * b;

const operacion = (strategy) => strategy();

module.exports = {
    operacion,
    suma, resta, multiplicacion, division
};