"use strict";
var add = function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
var number1 = 4;
var number2 = 10;
var printResult = true;
var resultPhrase = "Result: ";
add(number1, number2, printResult, resultPhrase);
