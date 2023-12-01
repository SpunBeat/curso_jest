const {operacion, suma, resta, division, multiplicacion} = require('./high_order');

describe('High Order', () => {
    test('call operacion sumando 3 + 4', () => {
        const valor = operacion(() => suma(3, 4));
        expect(valor).toBe(7);
    });
    test('call operacion dividir 3 / 0', () => {
        const valor = operacion(() => division(3, 0));
        expect(valor).toBeUndefined();
    });
    test('call operacion dividir 30 / 10', () => {
        const valor = operacion(() => division(30, 10));
        expect(valor).toBe(3);
    });
    test('call operacion resta 3 - 6', () => {
        const valor = operacion(() => resta(3, 6));
        expect(valor).toBe(-3);
    });
    test('call operacion multiplicacion 30 * 10', () => {
        const valor = operacion(() => multiplicacion(30, 10));
        expect(valor).toBe(300);
    });
});