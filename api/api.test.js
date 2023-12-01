const {fakeGet} = require('./api');
const API_MOCK = require('./api.mock');

describe('API', () => {
    it('should fakeGet to get profile', async() => {
        expect.assertions(1);
        const data = await fakeGet('profile');
        expect(data).toEqual(API_MOCK['profile']);
    });

    it('should fakeGet to get documents', async () => {
        expect.assertions(3);
        const data = await fakeGet('documents');
        const count = data.length;
        expect(count).toBe(3);
        expect(data[0]).toEqual({"file": "pdf", "name": "Acta de nacimiento"});
        expect(data).toEqual(API_MOCK['documents']);
    });

    it('should fakeGet to get unknown', async () => {
        expect.assertions(1);
        try {
            await fakeGet('unknown');
        } catch (error) {
            expect(error.message).toBe('404 path not found');
        }
    });

    it('should fakeGet without path', async () => {
        expect.assertions(1);
        try {
            await fakeGet();
        } catch (error) {
            expect(error.message).toBe('500 path is required');
        }
    });
});