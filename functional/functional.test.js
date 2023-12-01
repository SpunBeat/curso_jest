const {PI,f,g} = require('./functional');

test('call g with 2 and PI equal to 5.1416', () => {
    expect(g(2, PI)).toBe(5.1416);
});

test('call f with 4 equal to 16', () => {
    expect(f(4)).toBe(16);
});

test('call f(g(2,PI)) equal to 26.436050560000005', () => {
    expect(f(g(2, PI))).toBe(26.436050560000005);
});