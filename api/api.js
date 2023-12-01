const API_MOCK = require('./api.mock');

async function fakeGet(path) {
    return new Promise((resolve, reject) => {
        if (!path) reject(new Error('500 path is required'));
        const keys = Object.keys(API_MOCK);
        const pathFound = keys.find(key => key === path);
        if (!pathFound) reject(new Error('404 path not found'));
        return resolve(API_MOCK[path]);
    });
}

module.exports = {
    fakeGet
};