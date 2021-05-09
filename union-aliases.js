"use strict";
var combine = function (input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);
var combinedNames = combine("Max", "Satoshi", "as-number");
console.log(combinedNames);
var combinedStringAges = combine("30", "25", "as-text");
console.log(combinedAges);
