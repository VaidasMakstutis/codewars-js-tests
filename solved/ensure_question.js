function ensureQuestion(s) {
        if (s[s.length - 1] == '?') return s;
        else {
            return s + '?';
        }
}


test('Ensure question', () => {
    expect(ensureQuestion('')).toBe('?');
});

test('Ensure question', () => {
    expect(ensureQuestion('Yes')).toBe('Yes?');
});

test('Ensure question', () => {
    expect(ensureQuestion('No')).toBe('No?');
});

test('Ensure question', () => {
    expect(ensureQuestion('Abc?')).toBe('Abc?');
});