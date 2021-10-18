function evenOrOdd(str) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < str.length; i++) {
        const digit = +str[i];
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    if (evenSum > oddSum) {
        return "Even is greater than Odd";
    }
    else if (evenSum < oddSum) {
        return "Odd is greater than Even";
    }
    else {
        return "Even and Odd are the same";
    }
}

// evenOrOdd('12');
// console.log (evenSum, oddSum);

test("Fixed tests", () => {
    expect(evenOrOdd('12')).toBe('Even is greater than Odd');
    expect(evenOrOdd('123')).toBe('Odd is greater than Even');
    expect(evenOrOdd('112')).toBe('Even and Odd are the same');
});