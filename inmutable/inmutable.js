const merger = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
};

const mergerES5 = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
};

// Probar una funcion que nos regrese un arreglo
// con las keys de un objeto

// Probar una funcion que nos regrese un arreglo
// con los values de un objeto

const getKeys = (obj) => {
    return Object.keys(obj);
};

const getValues = (obj) => {
    return Object.values(obj);
};

const getKeysES5 = (obj) => {
    const keys = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
};

const definePropertyOld = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        value,
        writable: false,
        enumerable: true,
        configurable: true
    });

    return obj;
};

const freezeObject = (obj) => {
    return Object.freeze(obj);
};

module.exports = {
    merger,
    mergerES5,
    getKeys,
    getValues,
    getKeysES5
};
