function twoHighest(arr) {
    if (arr.length === 0) {
        return arr;
    }

    else {
       return arr
        .filter((v, i, a) => a.indexOf(v) === i)  // Unique array
        .sort((a, b) => b - a)
        .slice(0, 2);  // Get first 2 element of sorted array
    }
};

twoHighest([15, 20, 20, 17]);