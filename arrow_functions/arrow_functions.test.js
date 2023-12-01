const {User} = require('./arrow_functions');

describe('Arrow Functions', () => {
    const user = new User('Alan', 'Olvera');

    test('user not has property age', () => {
        expect(user).toHaveProperty('age');
    });

    test('user has property name', () => {
        expect(user).toHaveProperty('name');
    });

    test('user with name Alan', () => {
        expect(user).toHaveProperty('name', 'Alan');
    });

    test('user with last name Olvera', () => {
        expect(user.lastName).toBe('Olvera');
    });

    test('user with full name Alan Olvera', () => {
        expect(user.getFullName()).toBe('Alan Olvera');
    });

    test('call verifyAge in user without callback called', () => {
        const callback = jest.fn();
        user.verifyAge(3, callback)
        expect(callback).not.toHaveBeenCalled();
    });

    test('call verifyAge in user with callback called', () => {
        const callback = jest.fn();
        user.verifyAge(33, callback)
        expect(callback).toHaveBeenCalled();
    });

    test('call setAge in user and changed was called', () => {
        const spy = jest.spyOn(user, 'changed');
        user.setAge(30)
        expect(spy).toHaveBeenCalledWith(30);
    });

});