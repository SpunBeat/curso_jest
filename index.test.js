const {welcome,userFactory,mayorDeEdad} = require('./index');

test('call welcome', () => {
    // Matcher toBe para valores primitivos
    expect(welcome()).toBe('Bienvenidos');
});

test('call userFactory', () => {
    // Matcher toEqual para objetos 
    expect(userFactory('Alan')).toEqual({
        nombre: 'Alan',
        type: 'USER'
    });
});

test('call mayorDeEdad with 18 equal to true', () => {
    expect(mayorDeEdad(18)).toBeTruthy();
});

test('call mayorDeEdad with 14 equal to false', () => {
    expect(mayorDeEdad(14)).toBeFalsy();
});