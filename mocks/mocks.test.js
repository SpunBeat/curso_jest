jest.mock('./database'); // Mock a un module entero

const {fetchData} = require('./database');

const {add, MyDate} = require('./mocks');

describe('Mocks Manuales', () => {

    test('fetchData stub using jest.mock()', () => {
        fetchData.mockReturnValue('Mock Data');
        expect(fetchData()).toBe('Mock Data');
    });

    test('adds 1 + 2 to equal 3', () => {
        const mockedAdd = jest.fn(add);
        mockedAdd.mockReturnValue(3);
        expect(mockedAdd(1, 2)).toBe(3);
    });

    test('gets getFullYear as 2024', () => {
        const myDate = new MyDate();
        const mockedGetFullYear = jest.spyOn(myDate, 'getFullYear');
        mockedGetFullYear.mockReturnValue(2024);
        expect(myDate.getFullYear(new Date())).toBe(2024);
    });

});