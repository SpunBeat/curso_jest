const {simuladorDeDesfase, process, divide} = require('./promises');

describe('Promises', () => {

    it('call simuladorDeDesfase with valid values', () => {
        simuladorDeDesfase(1000, 'buenos dias')
            .then(data => {
                expect(data).toBe('buenos dias');
            });
    });

    it('call simuladorDeDesfase with invalid values', () => {
        simuladorDeDesfase(21000, 'buenos dias')
            .catch(error => {
                expect(error.message).toBe('Demasiado tiempo de espera');
            });
    });

    it('call process', async () => {
        try {
            const data = await process();
            expect(data.messageFromPromise).toBe(10);
            expect(data.messageFromPromiseDesfasada).toBe('Tardamos un rato');
        } catch (error) {
            expect(error).toMatch('error');
        }
    });

    it('should divide 35 / 7', async () => {
        const result = await divide(35, 7);
        expect(result).toBe(5);
    });

    it('should not divide 35 / 0', async () => {
        expect.assertions(1);
        try {
            await divide(35, 0);
        } catch (error) {
            expect(error.message).toBe('división por cero no esta definida');
        }
    });
});