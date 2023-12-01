const promise = new Promise((resolve, reject) => {
    resolve(10);
    reject(new Error('error Algo falló'));
});

const simuladorDeDesfase = (tiempoDeDesfase, valor) => {
    const limit = 20000;

    return new Promise((resolve, reject) => {
        if (tiempoDeDesfase > limit) {
            return reject(new Error('Demasiado tiempo de espera'));
        }
        setTimeout(() => {
            resolve(valor);
        }, tiempoDeDesfase);
    });
};

async function process() {
    try {
        let messageFromPromise = await promise
            .catch((error) => error.message)
            .then(data => data); // OK -> 10
        const promiseDesfasada = simuladorDeDesfase(4000, 'Tardamos un rato'); 
        const messageFromPromiseDesfasada = await promiseDesfasada; // OK -> Tardamos un rato
        return {
            messageFromPromise,
            messageFromPromiseDesfasada
        };
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

async function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error('división por cero no esta definida'));
        } else {
            resolve(a / b);
        }
    });
}

module.exports = {
    simuladorDeDesfase,
    process,
    divide
};
