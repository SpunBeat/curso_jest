const {User, createDateFromString, calculateAge} = require('./user');
const {USER_1, matrix, dateMatrix, USERS_MATRIX} = require('./user.mock');
const {advanceTo, clear} = require('jest-date-mock');

describe('User', () => {
    let user;

    // 1. Alls (beforeAll, afterAll)

    // 2. Eachs (beforeEach, afterEach, test.each)

    beforeEach(() => {
        advanceTo(new Date('2023-11-29')); // Fijamos la fecha a comparar
    });

    afterEach(() => {
        clear(); // Restaura la fecha actual de cada prueba
    });

    test.each(matrix)('should createDateFromString with date: %s', (dateString, year) => {
        const date = createDateFromString(dateString);
        expect(date.getFullYear()).toBe(year);
    });

    test.each(dateMatrix)('should calculate age from %s', (birthday, date, age) => {
        const years = calculateAge(birthday, date);
        expect(years).toBe(age);
    });

    test.each(USERS_MATRIX)('should create users', (USER, fullName, phoneNumber, age) => {
        expect.assertions(3);
        user = new User(USER);
        expect(user.getFullName()).toBe(fullName);
        expect(user.phoneNumber).toBe(phoneNumber);
        expect(user.getAge()).toBe(age);
    });

});