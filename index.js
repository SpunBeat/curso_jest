function welcome() {
    return 'Bienvenidos';
}

function userFactory(nombre) {
    return {
        nombre,
        type: 'USER'
    };
}

function mayorDeEdad(edad) {
    return edad >= 18;
}

module.exports = {
    welcome,
    userFactory,
    mayorDeEdad,
};
