const reverseString = require('./reversestring');

test('reverseString fun', () => {
   expect(reverseString).toBeDefined();
});


// String reverses
test('String reverses', () => {
    expect(reverseString('put')).toEqual('tup');
});


test('String reverses with uppercase', () => {
    expect(reverseString('Put')).toEqual('tup');
});
