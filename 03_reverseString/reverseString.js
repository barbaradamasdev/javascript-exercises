const reverseString = function(string) {
    let newString = [];
    let toRight = 0;
    let toLeft = string.length;

    for (; toRight < string.length; toRight++) {
        toLeft--;
        newString[toRight] = string.charAt(toLeft);
    }
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
