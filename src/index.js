module.exports = function reverse(n) {
    const numberString = n.toString();
    const reversedString = numberString.split("").reverse().join("");
    const reversedNumber = parseInt(reversedString, 10);
    return reversedNumber;
};
