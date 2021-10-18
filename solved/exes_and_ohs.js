function XO(str) {

    let CountX = 0;
    let CountO = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[j] === 'x' || str[j] === 'X') {
            CountX++;
        }

        else if (str[j] === 'o' || str[j] === 'O') {
            CountO++;
        }
    }

    if (CountX === CountO) {
        return true;
    }
    else { return false };

}


test("test", () => {
    expect(XO('xo')).toBe(true);
    expect(XO('xxOo')).toBe(true);
    expect(XO('xxxm')).toBe(false);
    expect(XO('Oo')).toBe(false);
    expect(XO('ooom')).toBe(false);
});