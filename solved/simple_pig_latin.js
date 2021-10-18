function pigIt(str) {
    let strArr = str.split(' ');
    let newStr = [];

    for (let word of strArr) {
        if ((/([a-zA-Z])/).test(word)) {
            newStr.push(word.substring(1) + word[0] + "ay");
        } else {
            newStr.push(word);
        }
    }
    return newStr.join(" ");
}



test("test", () => {
    expect(pigIt('Pig latin is cool !')).toBe('igPay atinlay siay oolcay !')
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
});