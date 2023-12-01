const {merger, mergerES5, getKeys, getValues, getKeysES5} = require('./inmutable');

test('call merger with {name: Alan} and {lastName: Olvera}', () => {
    expect(
        merger(
            {name: 'Alan'},
            {lastName: 'Olvera'}
        )
    ).toEqual({
        name: 'Alan',
        lastName: 'Olvera'
    });
});

test('call mergerES5 with {name: Alan} and {lastName: Olvera}', () => {
    expect(
        mergerES5(
            {name: 'Alan'},
            {lastName: 'Olvera'}
        )
    ).toEqual({
        name: 'Alan',
        lastName: 'Olvera'
    });
});

test('call getKeys', () => {
    expect(
        getKeys({name: 'Alan', lastName: 'Olvera', country: 'Mexico'})
    ).toEqual(
        ['name', 'lastName', 'country']
    );
});

test('call getValues', () => {
    expect(
        getValues({name: 'Alan', lastName: 'Olvera', country: 'Mexico'})
    ).toEqual(
        ['Alan', 'Olvera', 'Mexico']
    );
});

test('call getKeysES5', () => {
    expect(
        getKeysES5({name: 'Alan', lastName: 'Olvera', country: 'Mexico'})
    ).toEqual(
        ['name', 'lastName', 'country']
    );
});
