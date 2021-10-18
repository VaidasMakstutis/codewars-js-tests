function digital_root(n) {
    let digits = n.toString().split("").map(Number);
    let amount = 0;
    for (let i = 0; i < digits.length; i++) {
        amount += digits[i];
    }
    let sumString = amount.toString();
    if (sumString.length > 1) {
        let sumDigits = sumString.split("").map(Number);
        let firstSumDigit = sumDigits.slice(0);
        let lastSumDigit = sumDigits.slice(-1);
        return firstSumDigit[0] + lastSumDigit[0];
    } else {
        return amount;
    }
}


test("test", () => {
    expect(digital_root(16)).toBe(7)
    expect(digital_root(456)).toBe(6)
    expect(digital_root(10)).toBe(1)
});

https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript