function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();

function* generatorInfinity() {
    let result = 0;
    while (true) {
        result += 1;
        yield result;
    }
}

const infinity = generatorInfinity();

function* generatorFactorial(n) {
    let result = 1;
    let j = 0;
    for (let i = 1; i <= n; i++) {
        result *= i;
        j += i;
        yield {i, j, factorial: result};
    }
}

const limit = 9;

const factorial = generatorFactorial(limit);

for (const iterator of factorial) {
    console.log(iterator);
}

// 1. funcion que me simule un delay que simule un segundo y que resuelva una data
// 2. crear funcion generadora que resuelva con yield el delay de la funcion anterior
// 3. crear una funcion que se encargue de simular un run task 

// Ejemplo runTask(); esto debe de simular un delay usando la funcion generadora

// crear un generador de dos 2 yields
// crear una funcion recursiva nosotros invocariamos el delay

// en el console log solo deberiamos recibir cada segundo lo siguiente: uno, .... dos



