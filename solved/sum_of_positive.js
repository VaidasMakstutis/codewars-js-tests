function positiveSum(arr) {
    let suma = 0;
    arr.forEach(element => {
        if (element > 0)
            suma += element;
    });
    return suma;
}

    test('Testing for fixed tests', () => {
    expect(positiveSum([])).toBe(0);
  });

    test('Testing for fixed tests', () => {
    expect(positiveSum([1,2,3,4,5])).toBe(15);
  });

  test('Testing for fixed tests', () => {
    expect(positiveSum([1,-2,3,4,5])).toBe(13);
  });


  test('Testing for fixed tests', () => {
    expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
  });

  test('Testing for fixed tests', () => {
    expect(positiveSum([-1,2,3,4,-5])).toBe(9);
  });