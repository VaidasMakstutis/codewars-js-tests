function expandedForm(num) {
    let numStr = num.toString().split('');

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] != 0) {
            for (let y = (numStr.length - i); y > 1; y--) {
                numStr[i] += '0';
            }
        }
    }

    numStr = numStr.filter(value => value !== '0');
    return numStr.join(' + ')
}



test("test", () => {
    expect(expandedForm(12)).toBe('10 + 2');
    expect(expandedForm(42)).toBe('40 + 2');
    expect(expandedForm(70304)).toBe('70000 + 300 + 4');
});