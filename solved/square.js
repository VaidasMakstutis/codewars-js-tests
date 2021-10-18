var isSquare = function (arr) {
    for (let j = 0; j < arr.length; j++) {
        if (!Number.isInteger(Math.sqrt(arr[j])))
            return false;
        else {
            return true;
        }
    }
}


    // test("Basic tests",function() {    
    //     expect(isSquare([1, 4, 9, 16, 25, 36]).toBe(true);
    //     Test.assertEquals(isSquare([1, 2, 3, 4, 5, 6]), false);
    //     Test.assertEquals(isSquare([]), undefined);
    //     Test.assertEquals(isSquare([1, 2, 4, 15]), false); 
    // });