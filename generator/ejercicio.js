// 1. Funcion delay
function delay(value, segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, segundos * 1000);
    });
}

// 2. Funcion generadora
function* asyncTask() {
    console.log('cargando users...');
    const result1 = yield delay('get users()', 1);
    console.log(result1);
    console.log('cargando documents...');
    const result2 = yield delay('get documents()', 10);
    console.log(result2);
    console.log('cargando attachments...');
    const result3 = yield delay('get attachments()', 2);
    console.log(result3);
    console.log('cargando profiles...');
    const result4 = yield delay('get profiles()', 1);
    console.log(result4);
}

// 3. Funcion runTask
function runTask() {
    const generator = asyncTask();

    function handleAsync(iteration) {
        const {value, done} = iteration;

        if (done) return;

        if (value instanceof Promise) {
            value.then((result) => {
                handleAsync(generator.next(result));
            });
        }
    }

    handleAsync(generator.next());
}

// 4. Invocar runTask
runTask();


