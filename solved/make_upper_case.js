function makeUpperCase(str) {
    return str.toUpperCase();
  }


  test("should pass the basic tests", function(){
    expect(makeUpperCase('hello')).toBe('HELLO');
  });