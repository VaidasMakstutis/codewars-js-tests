function getCount(str) {
    var vowelsCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[aeiou]/)) {
            vowelsCount++;
        }
    }
    console.log(vowelsCount);
    return vowelsCount;
}

getCount("abracadabra");