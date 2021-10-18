var moveZeros = function (arr) {
    var k = arr.length - 1;
    while (k--) {
        if (arr[k] === 0) {
            arr.push(arr.splice(k, 1)[0]);
        }
    }
    return arr;
}

moveZeros([1,2,0,1,0,1,0,3,0,1]);