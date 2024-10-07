// suma.test.js
const sumar = require('./suma');

test('suma 2 + 3 debe ser igual a 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('suma 0 + 0 debe ser igual a 0', () => {
    expect(sumar(0, 0)).toBe(0);
});